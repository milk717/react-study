import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Welcome(props) {
    return (<h1>Hello, {props.name}</h1>);
}

function AppFunc() {
    return (
        <div>
            <Welcome name="sumin"></Welcome>
            <Welcome name="minsu"></Welcome>
            <Welcome name="sam"></Welcome>
        </div>
    );
}

root.render(
    <AppFunc/>
);

//앱 퍼포먼스를 로그로 보여줌
reportWebVitals(console.log);
