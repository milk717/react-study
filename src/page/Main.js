import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useNavigate } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from 'react-player/lazy';
import Forward10Icon from '@mui/icons-material/Forward10';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Replay10Icon from '@mui/icons-material/Replay10';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Button from '@mui/material/Button';
import PipPlayer from '../components/PipPlayer';

function Main(){
    const location = useLocation();  //맨 처음 메인 페이지 진입할 때는 null
    let navigate = useNavigate();
    const [playTime, setPlayTime] = useState(0);
    const [isPip, setIsPip] = useState(false);

     const handleButtonClick = ()=>{
         navigate('/watch', {
             state:{
                 playTime: playTime,
             },
         });
     };

     useEffect(()=>{
         if(location.state != null){
             setIsPip(location.state.isPip);
             setPlayTime(location.state.playTime);
             console.log('useEffect');
         }
     },[]);

    return(
        <div>
            <div>
                <h1>메인 페이지 입니다</h1>
                <h2>동영상 목록</h2>
                <button onClick={handleButtonClick}>
                    동영상 재생 페이지 이동
                </button>
                {
                    (isPip)
                    ? <PipPlayer playTime ={playTime}/>
                    : null
                }
            </div>
        </div>
    );
}

export default Main;