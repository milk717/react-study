import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

const dataId = 2;

function ListItem(props) {
    return <li>{props.value}</li>;
}

function TodoList(props) {
    const listValues = props.values;
    return(
        <ul>
            {listValues.map((value) =>
                    <ListItem key={value.id} value={value.content}/>)
            }
        </ul>
    );
}

class TodoListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            todolist: [
                {
                    id: 1,
                    content: '첫 번째 항목'
                }
            ]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        //console.log(this.state.value);
    }

    handleSubmit(event) {
        const {todolist} = this.state;
        this.setState({
            todolist: todolist.concat({id: dataId, content: this.state.value}),
            value: ""
        });
        dataId++;
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit" value="추가"/>
                </form>
                <TodoList values={this.state.todolist}/>
            </div>
        );
    }
}

root.render(
    <div>
        <TodoListForm/>
    </div>
);

//앱 퍼포먼스를 로그로 보여줌
// reportWebVitals(console.log);
