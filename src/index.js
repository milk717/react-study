import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Form(){
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return(
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}

root.render(
    <Form/>
);

//앱 퍼포먼스를 로그로 보여줌
reportWebVitals(console.log);
