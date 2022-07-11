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
    //영상 정보를 하나의 state 객체로 관리
    const [state, setState] = useState({
        id: 0,
        url: '',
        playTime: 0,
        isPip: false
    });
    //state 비구조화 할당
    const {id, url, playTime, isPip} = state;

     const handleButtonClick = ()=>{
         navigate('/watch', {
             state:{
                 id: 0
             },
         });
     };

    //메인화면 처음 진입할 때는 실행 x
    //동영상 보기 화면에서 pip 버튼 눌러서 main으로 돌아왔을 때만 실행됨
     useEffect(()=>{
         if(location.state != null){
            setState({
                id: location.state.id,
                url: location.state.url,
                playTime: location.state.playTime,
                isPip: location.state.isPip,
            });
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
                    ? <PipPlayer state={state}/>
                    : null
                }
            </div>
        </div>
    );
}

export default Main;