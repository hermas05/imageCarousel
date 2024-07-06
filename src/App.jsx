import React, { useState } from "react";
import { ReactDOM } from "react";
import { FaArrowAltCircleLeft, FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function App(){
    
    const names = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BNgzz_uTZKteGYqjA3Ww1yhIJGPL_S4ygXkm5Bm_NA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7meA5D2zTuj9AECjEQR6lv9C0PTa5BU4k4IkxNxOFg&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLavT7hdksf8GzF1S4TeGL3DFyF7eEOL1e-FcXNgnYhw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJDx2rgz5O2J26_fzWpRxRIHyKbg_uOfsUQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eF2EPE0vA6B9cNIfTX_lnizV3OGwTdADaA&usqp=CAU"]
    
    const [value , setValue]=useState(0);
    function rightClick(){
        setValue(()=>{
        return (value===names.length-1?(names.length-1):value+1)
    });
    }
    
    function leftClick(){
        setValue(()=>{
            return (value===0?(0):value-1)
        });
    }


    return(
        <div>
        <h2>Project 1: Carousel</h2>
        <h2>Wallpaper</h2>
        <div className="container">
        <FaArrowAltCircleLeft onClick={leftClick} />
        
        <img src={names[value]} alt="image" />
        
        <FaArrowCircleRight onClick={rightClick}/>
        </div>
        </div>
    );
}

export default App;