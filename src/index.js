import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return(
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

root.render(
    <Clock/>
);

//앱 퍼포먼스를 로그로 보여줌
reportWebVitals(console.log);
