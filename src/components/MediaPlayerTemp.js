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
import {getMediaData} from '../apis/api/media';
import {getMediaDataInfo} from '../apis/services/media';
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

const MediaPlayerTemp = ({playTime}) =>{
    let videoRef = useRef(null);

    const [mediaData, setMediaData] = useState([]);
    let url = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

    (async () =>{
        await getMediaData(1)
            .then(getMediaDataInfo)
            .then((res)=>setMediaData(res))
    })()


    const handleVideoStart = () =>{
        videoRef.current.seekTo(playTime);
    };

    let navigate = useNavigate();

    const handlePipButtonClick = () =>{
        let time = videoRef.current.getCurrentTime();
        navigate( "/",
            {
                state:{
                    playTime: time,
                    isPip: true
                }
            }
        );
    };

    return(
        <div>
            <h2>동영상 제목</h2>
            <MediaPlayerWrapper>
                <ReactPlayer
                    ref={videoRef}
                    url={url}    // 플레이어 url
                    width='100%'         // 플레이어 크기 (가로)
                    height='100%'
                    playing={true}        // 자동 재생 on
                    muted={true}          // 자동 재생 on (디폴트 음소거일 때만 자동재생됨)
                    controls={false}       // 플레이어 컨트롤 노출 여부
                    onStart = {handleVideoStart}
                />
                <MediaControlWrapper>
                    <Button onClick={handlePipButtonClick} startIcon={<FeaturedVideoIcon/>}>
                    </Button>
                </MediaControlWrapper>
            </MediaPlayerWrapper>
        </div>
    );
};

export default MediaPlayerTemp;