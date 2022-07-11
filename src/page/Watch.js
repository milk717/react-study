import MediaPlayerTemp from "../components/MediaPlayerTemp"
import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import {getMediaData} from '../apis/api/media';
import {getMediaDataInfo} from '../apis/services/mediaService';

function Watch(){
    const location = useLocation();
    const [mediaData, setMediaData] = useState([]);

    //이 로직은 main화면에서 영상보기 버튼을 눌러서 진입할 때만 실행됨
    //Main.js에서 받은 id값을 이용해서 api 호출해서 영상 data정보 나타내기
    useEffect(() => {
        (async (value) => {
            await getMediaData(location.state.id)
                .then((value) => getMediaDataInfo(value))
                .then((value) => setMediaData(value));
        })();
        console.log(mediaData);
    },[]);

    return(
        <>
            <MediaPlayerTemp
                mediaData = {mediaData}
            />
        </>
    );
}

export default Watch;