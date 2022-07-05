import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

class TodoListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    render() {
        return (
            <form>
                <input type = "text" value = {this.state.value} onChange={this.handleChange}/>
            </form>
        );
    }
}


root.render(
    <TodoListForm/>
);

//앱 퍼포먼스를 로그로 보여줌
reportWebVitals(console.log);
