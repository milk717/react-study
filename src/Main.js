import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from 'react-player/lazy';

// 이따가 파일 분리할거임
const PipPlayer = ({currentTime, url, poster}) => {
    const videoRef = useRef();
    useEffect(() => {
        videoRef.current.seekTo(currentTime,"seconds");
    }, []);
    return(
        <ReactPlayer
            ref={videoRef}
            url={url}    // 플레이어 url
            width='50%'         // 플레이어 크기 (가로)
            height='50%'        // 플레이어 크기 (세로)
            playing={true}        // 자동 재생 on
            muted={true}          // 자동 재생 on
            controls={false}       // 플레이어 컨트롤 노출 여부
            poster={poster}   // 플레이어 초기 포스터 사진
        />
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
            {/*{*/}
            {/*    (state.isPip)*/}
            {/*    ? <PipPlayer*/}
            {/*            currentTime = {state.currentTime}*/}
            {/*            url = {state.url}*/}
            {/*            poster = {state.poster}*/}
            {/*        />*/}
            {/*    : null*/}
            {/*}*/}
        </div>
    );
}

export default Main;