import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Example(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

root.render(
    <Example/>
);

//앱 퍼포먼스를 로그로 보여줌
// reportWebVitals(console.log);
