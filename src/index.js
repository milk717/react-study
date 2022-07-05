import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function formatDate(date) {
    return date.toLocaleDateString();
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

function Avatar(props){
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
}

function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user = {props.author}/>
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo author = {props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

root.render(
    <Comment
        date ={comment.date}
        text ={comment.text}
        author = {comment.author}
    />
);

//앱 퍼포먼스를 로그로 보여줌
reportWebVitals(console.log);
