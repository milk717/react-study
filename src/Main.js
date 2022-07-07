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

const ControlsWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom 0;
    background-color: black;
    opacity:0.5;
    display: flex;
    flex-direction: column;
    visibility: hidden;
`;

const PipPlayerWapper = styled.div`
    position: absolute;
    bottom: 0;
    &: hover{
        ${ControlsWrapper}{
            visibility: visible;  
        };  
    };
`;

const Div = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const topControlsWrapper = styled.div`
    display: flex;
    justify-content:     
`;

const ControlsIcons = styled.button`
    width: auto;
    background-color: transparent;
    color: #777;
    transform: scale(1);
    text-color: #000;
    &:hover {
        color: #fff;
        transform: scale(1.2);
    };
`;

const PipPlayer = ({currentTime, url, poster}) => {
    let navigate = useNavigate();
    const videoRef = useRef();
    // useEffect(() => {
    //     videoRef.current.seekTo(currentTime,"seconds");
    // }, []);

    const handlePipBackButton = () =>{
        let currentTime = videoRef.current.getCurrentTime();
        navigate("/player",
            {
                state: {
                    currentTime : currentTime,
                }
            }
        );
    };

    return(
        <Div>
            <PipPlayerWapper>
                <ReactPlayer
                    ref={videoRef}
                    url={url}    // 플레이어 url
                    width='300px'         // 플레이어 크기 (가로)
                    height='100%'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    muted={true}          // 자동 재생 on
                    controls={false}       // 플레이어 컨트롤 노출 여부
                    poster={poster}   // 플레이어 초기 포스터 사진
                />
                <ControlsWrapper>
                    <Button onClick={handlePipBackButton} disableRipple>
                        <FeaturedVideoIcon fontSize="inherit"/>
                    </Button>
                </ControlsWrapper>
            </PipPlayerWapper>

        </Div>
    );
};

function Main(){
    const {state} = useLocation();
    let navigate = useNavigate();

     const handleButtonClick = ()=>{
         navigate(
             "/player",
             {
                 state:{
                     id: 0
                 }
             },
         );
     }

    return(
        <div>
            <div>
                <h1>메인 페이지 입니다</h1>
                <button onClick={handleButtonClick}>
                    첫 번째 동영상
                </button>
                <button onClick={()=>handleButtonClick(1)}>
                    두 번째 동영상
                </button>
            </div>
            {
                (state.isPip)
                ? <PipPlayer
                        currentTime = {state.currentTime}
                        url = {state.url}
                        poster = {state.poster}
                    />
                : null
            }
        </div>
    );
}

export default Main;