import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Counter({initialCount}){
    const [count, setCount] = useState(initialCount);
    return(
        <>
            Count: {count}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </>
    )
}

root.render(
    <div>
        <Counter initialCount={0}/>
    </div>
);

//앱 퍼포먼스를 로그로 보여줌
// reportWebVitals(console.log);
