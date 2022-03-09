import React, { Component } from 'react';
import Todo from './Todoitem';

class Todolist extends Component {

constructor(props){
    super(props);
    this.state={
      keys:[]
    }
}

generateRandomKey=()=>{

    const randomNumber= Math.floor(Math.random() * 100000) 
    this.setState({keys:[...this.state.keys,randomNumber]})
    return randomNumber

}



componentDidMount(){}


    render() {
        return (
            <div>
          {this.props.todos.map((todo, index) => 
        <div  key={index}>
             <Todo
                keyGenerated={this.generateRandomKey}
                index={index}
                text={todo}
                edit={this.props.edit}
                delete={()=>this.props.delete(index)}
                />
        </div>
               
        
          )}
        </div>
        );
    }
}

export default Todolist;