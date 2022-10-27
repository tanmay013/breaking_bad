import React from "react";
import './Card.css';
import { Link } from "react-router-dom";

function Card(props){


    if( props.doa.toLowerCase() === 'alive')
    {   
        return(
            <div>
                <div className="card cardback" style={{'--imageUrls': `url(${props.imageUrl})`}} >
                <div className="border">
                    <h2>{props.actorName}</h2>
                    <Link to={"/cardDescript/"+props.id}><button className="btn" ><span>Read More </span></button></Link>
                </div>
                </div>
            </div>
        );
    }else{
        return(
            <div>
                <div className="card deadcardback" style={{'--imageUrls': `url(${props.imageUrl})`}} title='Character Image' >
                <div className="border">
                    <h2>{props.actorName}</h2>
                    <Link to={"/cardDescript/"+props.id}><button className="btn"><span>Read More </span></button></Link>
                </div>
                </div>
            </div>
        );
    }

    
}

export default Card;