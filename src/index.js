import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="sara" />;
root.render(
    element
);

//앱 퍼포먼스를 로그로 보여줌
reportWebVitals(console.log);
