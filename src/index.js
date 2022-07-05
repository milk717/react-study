import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    // handleClick() {
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }

    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON':'OFF'}
            </button>
        );
    }

}
root.render(
    <Toggle/>
);

//앱 퍼포먼스를 로그로 보여줌
reportWebVitals(console.log);
