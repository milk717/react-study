import ReactPlayer from 'react-player/lazy';
import Container from '@mui/material/Container';
import styled, { css } from 'styled-components';
import Typography from '@mui/material/Typography'
import Icon from "@mui/material/Icon"
import React, { useState, useEffect, useRef } from "react";
import Forward10Icon from '@mui/icons-material/Forward10';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Replay10Icon from '@mui/icons-material/Replay10';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const ControlsWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,6);
    opacity:0.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    visibility: hidden;
`;

const PlayerWapper = styled.div`
    width: 100%;
    position: relative;
    &: hover{
        ${ControlsWrapper}{
            visibility: visible;  
        };  
    };
`;

const MiddleControlsWrapper = styled.div`
    display: flex;
    flex-direction: row;  
    justify-content: center;
`;

const ControlsIcons = styled.button`
    color: #777;
    background-color: #000;
    font-size: 2rem;
    margin: 10px;
    transform: scale(1);
    &:hover {
        color: #fff;
        transform: scale(1.2);
    };
`;

const MediaPlayer = ({playList, index}) => {
    let navigate = useNavigate();
    let videoRef = useRef(null);
    const [state, setState] = useState({
        playing: true,     // 재생중인지
        muted: false,      // 음소거인지
        volume: 0.5,       // 볼륨크기
        playbackRate: 1.0, // 배속
        played: 0,         // 재생의 정도 (value)
        seeking: false,    // 재생바를 움직이고 있는지
        duration: 0,       // 전체 시간
        pip: false
    });

    const [data, setData] = useState(null);
    useEffect(()=>{
        setData(null);
       const getData = async() =>{
           try{
               const response = await axios.get(
                   'https://milk717.github.io/web/mediaDummy.json'
               );
               setData(response.data[0]);
               console.log(response.data[0]);
           }catch (e) {
               console.log('error');
           }
       }
        getData();
    },[]);

    const handlePlayPauseButtonClick = () =>{
        setState({
            ...state, playing: !state.playing
        });
    };

    const handlePipButtonClick = () => {
        let currentTime = videoRef.current.getCurrentTime();
        navigate("/",
            {
                state: {
                    currentTime : currentTime,
                    url: data.url,
                    poster: data.poster,
                    isPip: true
                }
            }
        );
    };

    const handleReplayButtonClick =
        ()=>{videoRef.current.seekTo(videoRef.current.getCurrentTime()-10);}

    const handleForwardButtonClick =
        ()=>{videoRef.current.seekTo(videoRef.current.getCurrentTime()+10);}

    return (
        <Container>
            <h2>동영상 보기 페이지</h2>
            <PlayerWapper id='player'>
                <ReactPlayer
                    ref={videoRef}
                    url={'https://www.youtube.com/watch?v=aM-YEkE2MIU&list=RDaM-YEkE2MIU&start_radio=1'}    // 플레이어 url
                    width='100%'         // 플레이어 크기 (가로)
                    height='100%'        // 플레이어 크기 (세로)
                    playing={state.playing}        // 자동 재생 on
                    muted={true}          // 자동 재생 on (디폴트 음소거일 때만 자동재생됨)
                    controls={false}       // 플레이어 컨트롤 노출 여부
                    light={false}         // 플레이어 모드
                    // poster={data.poster}   // 플레이어 초기 포스터 사진
                    // onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
                />
                {/*중간 버튼*/}
                <ControlsWrapper>
                    <MiddleControlsWrapper >
                        <ControlsIcons onClick={handleReplayButtonClick}>
                            <Replay10Icon fontSize="inherit" />
                        </ControlsIcons>

                        <ControlsIcons  onClick={handlePlayPauseButtonClick} >
                            {!state.playing ? (
                                <PlayCircleIcon/>
                            ) : (
                                <PauseCircleIcon/>
                            )}
                        </ControlsIcons>

                        <ControlsIcons onClick={handleForwardButtonClick}>
                            <Forward10Icon fontSize="inherit" />
                        </ControlsIcons>
                        {/*이부분은 아래쪽으로 옮길거임*/}
                        <ControlsIcons onClick={handlePipButtonClick}>
                            <FeaturedVideoIcon fontSize="inherit"/>
                        </ControlsIcons>
                    </MiddleControlsWrapper>

                    {/*아래쪽 버튼*/}
                </ControlsWrapper>
            </PlayerWapper>
        </Container>
    )
}

export default MediaPlayer;