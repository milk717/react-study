import './App.css';
import {Component} from "react";

class App extends Component {
    render() {
        return(
            <div>
                <h1>Hello</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default App;