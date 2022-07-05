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

    //컴포넌트가 DOM에 렌더링 될 때마다 실행됨
    componentDidMount() {
        this.timerId = setInterval(
            ()=> this.tick(),
            1000
        );
    }

    //컴포넌트에 의해 생성된 DOM이 삭제될 때마다 실행됨
    componentWllUnmount() {
        //타이머의 인터벌 삭제
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date: new Date(),
        });
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
