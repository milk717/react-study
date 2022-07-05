import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
        <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
}

const numbers = [1,2,3,4,5];

root.render(
    <NumberList numbers={numbers}/>
);

//앱 퍼포먼스를 로그로 보여줌
reportWebVitals(console.log);
