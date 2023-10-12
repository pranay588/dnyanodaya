import { useState,useRef } from "react";
import axios from "axios";
import img2 from '../../../server/yourfilenamehere.png';
const Hero = ()=>{
    const [count, setCount] = useState(0)
    const [text,setText] = useState('car');
    const ref = useRef();

    function handleClick(){
        axios.post('http://localhost:6969/img',{"prompt":text}).then((res)=>{
            ref.current.style = {display:"block"};
            ref.current.src = img2
            setCount(count+1)
        }).catch((err)=>{console.log(err)});
    }
        
    

    return(
        <div>
            <input type="text" placeholder="Enter text" value={text} onChange={(e)=>{
                setText(e.target.value);
            }}/>
            <button onClick={handleClick}>Submit</button>
            <img src={null} alt="Rendered Image" style={{display: "none"}} ref={ref}/>
        </div>
    );
}

export default Hero;