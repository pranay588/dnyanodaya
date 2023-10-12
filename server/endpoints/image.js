import axios from 'axios';
import {fileTypeFromBuffer} from 'file-type';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const img = async(req,res)=>{
    try{
        console.log("running....")
        const obj = req.body;
        console.log(obj)
        const img1 = await axios({
            method:'post',
            url:'http://4a9f-34-125-46-206.ngrok-free.app/generate_images',
            data: obj,
            responseType: 'arraybuffer'
        });
        async function savePhotoFromAPI() {

            const buffer = Buffer.from(img1.data);
            const fileType = await fileTypeFromBuffer(buffer);
            if (fileType.ext) {
                const outputFileName = `yourfilenamehere.${fileType.ext}`;
                fs.mkdir(path.join(__dirname,'/images'),{},(err)=>{
                    fs.createWriteStream(outputFileName).write(buffer);
                });
                
            } else {
                console.log('File type could not be reliably determined! The binary data may be malformed! No file saved!')
            }
        }
        savePhotoFromAPI();
        res.end().status(200);
    }catch(err){
         console.log(err);
    }
}
