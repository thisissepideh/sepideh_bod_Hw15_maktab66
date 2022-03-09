import React, { Component } from 'react';
import { Form,Button } from 'react-bootstrap';

class Todoform extends Component {

    constructor(props){
        super(props);
        this.state ={
           currentTodo:""
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault();  
        this.props.Submit(this.state.currentTodo);
        this.setState({currentTodo:""})
    }
 
    render() {
        return (
    <Form onSubmit={this.handleSubmit}> 
      <Form.Group variant="mb-3">
        <Form.Label className="text-center"><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input"  onChange={e => this.setState({currentTodo:e.target.value})} placeholder="Add new todo" value={this.state.currentTodo}/>
      </Form.Group>
      <Button variant="success m-3" type="submit">
        add new todo
      </Button>
    </Form>
        );
    }
}

export default Todoform;





