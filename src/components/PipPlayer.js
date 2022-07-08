import styled, { css } from 'styled-components';
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ReactPlayer from 'react-player/lazy';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';

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

const PipPlayer = ({playTime}) => {
    let navigate = useNavigate();
    const videoRef = useRef();


    const handleVideoStart = () =>{
        videoRef.current.seekTo(playTime);
    };

    const handlePipBackButton = () =>{
        let time = videoRef.current.getCurrentTime();
        console.log(time);
        navigate("/watch",
            {
                state: {
                    playTime : time,
                }
            }
        );
    };

    let url = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

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
                    onStart={handleVideoStart}
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

export default PipPlayer;