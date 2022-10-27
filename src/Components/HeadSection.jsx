import React from "react";
import Logo from "../images/BreakingBadLogo.png";
import './HeadSection.css';


function HeadSection(props){

    const searchHandler = (e) => {
        e.preventDefault();
        props.searchFunc(e.target.searchText.value);
    }

    const handlerEnter = (e) => {
        if(e.key === 'Enter'){
            searchHandler();
        }
    }

    return(
        <div className="HeaderMain">
            <div>
                <img src={Logo} alt="BreakingBadLogo"></img>
            </div>
            <div className="searchFormMain">
                <form role="search" onSubmit={searchHandler} >
                    <input id="searchText" type="search" placeholder="Search..." onKeyDown={handlerEnter} autoFocus />
                    <button className="searchBtn" type="submit">Go</button>    
                </form>
            </div>
            
        </div>
    );
}

export default HeadSection;