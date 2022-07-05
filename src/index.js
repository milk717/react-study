import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock(props) {
    return (
        <div>
            <h1>Hello, World!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    root.render(
        <Clock date={new Date()}/>
    );
}

setInterval(tick, 1000);


//앱 퍼포먼스를 로그로 보여줌
reportWebVitals(console.log);
