import React, { Component } from 'react';
import Todoform from './Todoform';
import Todolist from './Todolist';

class Todo extends Component {

    constructor(props){
        super(props);
        this.state={
            todos:[],
            currentTodo:""
        }
    }

    handleAdd =  todo => {
            this.setState({todos:[...this.state.todos,todo]})
          };

    handleDelete = index => { 
        
            const newTodos = [...this.state.todos];
            newTodos.splice(index, 1);
            this.setState({todos:newTodos})
    }

    handleEdit = (id, value) => {
        let newTodo = this.state.todos
        newTodo[id]=value
        this.setState({todos:newTodo})
        
    }
   
   

    render() {
       
        return (
            <div className='container'>
                <h1 className="text-center mb-4">Todo List</h1>
               <Todoform Submit={this.handleAdd} /> 
               <Todolist todos={this.state.todos} edit={this.handleEdit} delete={this.handleDelete}/>
            </div>
        );
    }
}

export default Todo;