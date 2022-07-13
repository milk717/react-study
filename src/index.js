import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ReactPlayer from 'react-player/lazy';
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <App/>
    </div>
);

//앱 퍼포먼스를 로그로 보여줌
// reportWebVitals(console.log);
