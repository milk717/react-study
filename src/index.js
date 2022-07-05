import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick(){
    const element = (
      <div>
          <h1>Hello, world</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    root.render(element);
}

setInterval(tick, 1000);

//앱 퍼포먼스를 로그로 보여줌
reportWebVitals(console.log);
