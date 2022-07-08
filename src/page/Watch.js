import MediaPlayerTemp from "../components/MediaPlayerTemp"
import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

function Watch(){
    const [playTime, setPlayTime] = useState(0);
    const location = useLocation();

    useEffect(()=>{
        setPlayTime(location.state.playTime);
    },[]);

    return(
        <>
            <MediaPlayerTemp
                playTime = {playTime}
            />
        </>
    );
}

export default Watch;