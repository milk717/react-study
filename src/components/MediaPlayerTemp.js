import ReactPlayer from 'react-player/lazy';
import styled, { css } from 'styled-components';
import React, { useState, useEffect, useRef } from "react";
import Forward10Icon from '@mui/icons-material/Forward10';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Replay10Icon from '@mui/icons-material/Replay10';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';
import instance from '../apis/utils/index';

const MediaControlWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,6);
    opacity:0.5;
    display: flex;
    flex-direction: column;
    justify-content: right;
    visibility: hidden;
`;

const MediaPlayerWrapper = styled.div`
    width: 100%;
    position: relative;
    &: hover{
        ${MediaControlWrapper}{
            visibility: visible;  
        };  
    };
`;

const MediaPlayerTemp = ({mediaData}) =>{
    let videoRef = useRef(null);

    const handleVideoStart = () =>{
        // console.log(`watch page 에서 재생 시간 정보 ${state.playTime}`);
        // videoRef.current.seekTo(playTime);
    };

    let navigate = useNavigate();

    const handlePipButtonClick = () =>{
        let time = videoRef.current.getCurrentTime();
        navigate( "/",
            {
                state:{
                    //재생 정보 관련
                    playTime: time,
                    isPip: true,
                    //동영상 데이터 관련
                    id: mediaData['id'],
                    url: mediaData['url'],
                }
            }
        );
    };

    return(
        <div>
            <h2>{mediaData['title']}</h2>
            <MediaPlayerWrapper>
                <ReactPlayer
                    ref={videoRef}
                    url={mediaData['url']}    // 플레이어 url
                    width='100%'         // 플레이어 크기 (가로)
                    height='100%'
                    playing={true}        // 자동 재생 on
                    muted={true}          // 자동 재생 on (디폴트 음소거일 때만 자동재생됨)
                    controls={false}       // 플레이어 컨트롤 노출 여부
                    poster={mediaData['poster']}
                    onStart = {handleVideoStart}
                />
                <MediaControlWrapper>
                    <Button onClick={handlePipButtonClick} startIcon={<FeaturedVideoIcon/>}>
                    </Button>
                </MediaControlWrapper>
            </MediaPlayerWrapper>
            <p>{mediaData['date']}</p>
        </div>
    );
};

export default MediaPlayerTemp;