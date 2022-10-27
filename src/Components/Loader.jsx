import React from "react";
import './Loader.css';

function Loader(props){
    return(
        <div className="loader" style={{'--w':props.width, '--h':props.height}}> 
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default Loader;