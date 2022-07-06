import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactPlayer from 'react-player/lazy';
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'));

function Number({count}){
    return(
        <>
            Number: {count}
        </>
    );
}

function Counter({initialCount}){
    const [count, setCount] = useState(initialCount);

    const [state, setState] = useState(() => {
        const initialState = Number({count});
        return initialState;
    });

    return(
        <>
            Count: {count}
            <br/>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <br/>
            initalState = {state}
            <br/>
            <Number count={count}/>
        </>
    );
}

root.render(
    <div>
        <App/>
    </div>
);

//앱 퍼포먼스를 로그로 보여줌
// reportWebVitals(console.log);
