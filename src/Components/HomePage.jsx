import React from "react";
import HeadSection from "./HeadSection";
import "./HomePage.css"; 
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Loader from "./Loader.jsx";
import { logEvent } from "firebase/analytics";
import { analytics } from "../FirebaseConfig";

function HomePage(){

    const [data,setData]=useState([]);
    const [off,setOff]=useState(12);
    const [showload, setShowLoad] = useState(true);
    const [stopLoad, setStopLoad] = useState(false);

    useEffect(()=> {
        async function getData(){
            const res = await axios.get("https://www.breakingbadapi.com/api/characters?limit=12&offset=0");
            setData(res.data);
        }
        getData();
    },[]);

    

    async function changeData(e){
        const text=e;
        if(text.length>=0){
            logEvent(analytics, "search", {
                value:text
            });
            const res = await axios.get("https://www.breakingbadapi.com/api/characters?name="+text);
            setData(res.data);
            setStopLoad(true);
            setShowLoad(false);
        }
        if(text===""){
            const res = await axios.get("https://www.breakingbadapi.com/api/characters?limit=12&offset=0");
            setData(res.data);
            setStopLoad(false);
        }
    }

    const fetchData= async()=>{
        const res = await axios.get("https://www.breakingbadapi.com/api/characters?limit=6&offset="+off);
        const arr=res.data;
        setData([...data,...arr]);
        setOff(off+6);
    }

    useEffect(()=> {
        const handleScroll = () => {
            if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight ){   
                
                if(stopLoad || off>60){
                    setShowLoad(false);
                }else{
                    setShowLoad(true);    
                    setTimeout(() => {
                        fetchData();
                    }, 2000);
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return(
        <div className="homePageMain">
            <HeadSection searchFunc={changeData} />
            <h1 className='CharacterHeading'> All Characters of Breaking Bad</h1>
                <div className='CardContainer'>
                    {
                        data.map((dat, index)=> <Card key={dat.char_id} id={dat.char_id} actorName={dat.name} imageUrl={dat.img} doa={dat.status}/>)     
                    }
                    
                </div>
                {showload ? <div className="homeLoader"><Loader height='120px' width='120px' /> </div>: ''}
        </div>
    );
}

export default HomePage;