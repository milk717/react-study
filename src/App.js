import './App.css';
import {Component} from "react";

class App extends Component{
  state={
    count: 0
  };

  handleChange = () =>{
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
        <div className="App">
          <div className="props">
            <span>{this.props.message}</span>
          </div>

          <div className="state">
            {this.state.count}
            <button onClick={this.handleChange}>click Me!</button>
          </div>
        </div>
    );
  }
}

export default App;
