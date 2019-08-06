import React from 'react';
import HelloComponent from './components/HelloComponents';
import InputField from './components/InputField';
import TodoApp from './components/TodoApp';

class App extends React.Component {

  state =
    {
      counter: 0,
      age: 10,
      value: "init val"
    }

    inputChangeHandler = (e) =>
    {
      console.log(e.target.value)
      this.setState({value: e.target.value})
    }

  clickHandler = () => {
    let newCounter = this.state.counter + 1
    let newAge = this.state.age + 5
    this.setState({
      counter: newCounter,
      age: newAge
    });
  }
  //function App() {
  render() {
    return (
      <div>
      {/*   <button onClick={this.clickHandler}>Increment</button>
        counter: {this.state.counter}
        <br /><br /><br />
        <HelloComponent name="Bob" age={this.state.age} />
        <HelloComponent name="Bob" age={this.state.age} />
        <InputField value={this.state.value} onChange={this.inputChangeHandler}/> */}
        <TodoApp />
      </div>
    );
  }

}

export default App;
