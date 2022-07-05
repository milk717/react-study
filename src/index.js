import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Example(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('sumin');

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count + 1)}>
                Click me
            </button>

            <p>You clicked {name}</p>
            <button onClick={()=>setName(name + '수민')}>
                Change name
            </button>
        </div>
    );
}

root.render(
    <Example/>
);

//앱 퍼포먼스를 로그로 보여줌
// reportWebVitals(console.log);
