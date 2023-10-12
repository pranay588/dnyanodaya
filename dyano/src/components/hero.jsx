import { useState,useRef } from "react";
import axios from "axios";
import img2 from '../../../server/yourfilenamehere.png';
const Hero = ()=>{
    const [text,setText] = useState('');
    const [count,setCount] = useState(0);
    const ref = useRef();
    // console.log(text);

    function handleClick(){
        const obj1 = { "prompt":"the Panel is of motion Panel 1: Newton standing in a lab with a look of excitement on his face, holding a notebook and a feather. Caption: “What happens when I drop this feather and this apple?” Panel 2: The feather and the apple are seen dropping in mid-air. Panel 3: The apple is seen hitting the ground first, followed by the feather. Caption: “Ah ha! The apple falls faster than the feather!” Panel 4: Newton is seen proudly smiling with his hands on his hips. Caption: “And so the Second Law of Motion was born!" };
        axios({
            method: 'get',
            url: 'http://localhost:6969/img',
        }).then((res)=>{
            ref.current.style = {display:"block"};
            setCount(count+1);
            
            
        }).catch((err)=>{console.log(err)});
    }
        
    

    return(
        <div>
            <input type="text" placeholder="Enter text" value={text} onChange={(e)=>{
                setText(e.target.value);
            }}/>
            <button onClick={handleClick}>Submit</button>
            <img src={img2} alt="Rendered Image" style={{display: "none"}} ref={ref}/>
        </div>
    );
}

export default Hero;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Hero() {
//   const [imageUrl, setImageUrl] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:6969/img').then(res=>{
//         const blob = res.data;
//         const reader = new FileReader();

//         reader.onload = () => {
//         setImageUrl(reader.result);
//     };

//     reader.readAsDataURL(blob);
//     }); // Assume you have the BytesIO object

//   }, []);

//   return (
//     <div>
//       {imageUrl && <img src={imageUrl} alt="Displayed Image" />}
//     </div>
//   );
// }

// export default Hero;


// import React, { useState, useEffect } from 'react';

// function Hero() {
//   const [imageSrc, setImageSrc] = useState(null);

//   useEffect(() => {
//     // Assuming `jfifResponse` is the JFIF response data
//     // Convert the JFIF response data to a data URL
//     const base64String = btoa(String.fromCharCode(...new Uint8Array(jfifResponse)));
//     const dataUrl = `data:image/jpeg;base64,${base64String}`;

//     setImageSrc(dataUrl);
//   }, [jfifResponse]);

//   return (
//     <div>
//       {imageSrc && <img src={imageSrc} alt="Rendered Image" />}
//     </div>
//   );
// }

// export default Hero;

