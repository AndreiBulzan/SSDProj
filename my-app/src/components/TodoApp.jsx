import React from 'react';
import '../styles/TodoApp.css'
import Todos from './TodoApp/Todos'
import axios from 'axios'
import { throws } from 'assert';
const instance = axios.create({baseURL: 'http://localhost:4000',});
class TodoApp extends React.Component {
    state = 
    {
        todos: [],
        values:''
    }
    /*todos: [{id:...,name:'...',checked:true/false}]*/
    getToDo = ()=>
    {
        instance.get('/getTodos').then( (response) => {
        this.setState({ todos: response});
        })
    }

    componentDidMount(){
        instance.get('/getTodos')
        .then((response) =>
        {
            console.log(response);
            const todos = response.data;
            this.setState({ todos});
        }
        )
    }
    addToDo = () =>
    {
        let inputValue = this.state.inputValue;
        let newTodo = 
        {
            id: inputValue + '__' + Math.random(),
            name: inputValue,
            checked: false
        }

        
        //let newTodos = this.state.todos.push(inputValue);

        instance.post('/add',{
            todo:
            {
                name:newTodo.name,
                id: newTodo.id,
                checked:newTodo.checked
            }
        })
      
  .then( (response) => {
    // handle success
    console.log(response);
    let newTodos = [
        ...this.state.todos,newTodo
    ]
    this.setState({ todos: newTodos})
  })
    }


    updateChecked=(id) =>
    {


        instance.post('/checked/' + id).then( (response) => {
            // handle success
            console.log(response);
            let updateTodos = [...this.state.todos];
            let index = updateTodos.findIndex( x => x.id === id);
            updateTodos[index]={...updateTodos[index],
                checked: !updateTodos[index].checked}
                this.setState({todos:updateTodos});
          })
    }


    deleteItem=(id) =>
    {


        instance.post('/delete/' + id).then( (response) => {
            // handle success
            console.log(response);
            let updateTodos = [...this.state.todos];
            let index = updateTodos.findIndex( x => x.id === id);
            updateTodos.splice(index,1);
            this.setState({todos:updateTodos});
          })
    }

    inputChangeHandler = (e) =>
    {
      this.setState({inputValue: e.target.value})
    }
    render() {
        return (
            <div>
                <input value={this.state.InputValue}  onChange={this.inputChangeHandler}/>
        
        <button className = {'add-button'} onClick={this.addToDo}>Add</button>
        <Todos todos = {this.state.todos}
        deleteItem = {this.deleteItem}
        updateChecked = {this.updateChecked}
        />
        <div  onClick={this.getToDo}>Get ALL</div>
        </div>
        );
    }

}

export default TodoApp;
