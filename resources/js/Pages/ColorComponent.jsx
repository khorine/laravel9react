import React,{useState} from 'react';

export default function ColorComponent(){
    const [color,setColor] = useState("red");

    return(
        <>
            <h1>My Favorite color is {color}</h1>
            <button type="button" onClick={()=>setColor("Green")}>Change Color</button>
        </>
    )
}