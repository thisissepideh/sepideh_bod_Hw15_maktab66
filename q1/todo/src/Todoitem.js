import React, { Component } from 'react';
import { Button,Card,Row} from 'react-bootstrap';
import { FcOk } from "react-icons/fc";
class Todoitem extends Component {
    constructor(props){
        super(props);
        this.state={
            text:"",
            UniqKey:0,
            index:0,
            disableEdit:true
        }
    }


componentDidMount(){
   
     this.setState({text:this.props.text,
        UniqKey:this.props.keyGenerated(),
            index:this.props.index,
            disableEdit:true})
}


handleEdit=()=>{
    
     if(this.state.disableEdit){
         this.setState({disableEdit:false})
     }
     else{
         this.setState({disableEdit:true})
         this.props.edit(this.state.index,this.state.text)
     }
}
    render() {
       
        return (
           <Row>
           <Card>
            <Card.Body> 
            <div className='todo'> 
             <FcOk/>
             <input type="text" onChange={e =>this.setState({text:e.target.value})} disabled={this.state.disableEdit} value={this.state.text} style={{width: "85%"}}/> 
            <div>
              <Button variant="outline-primary" onClick={this.handleEdit}>edit</Button>
              <Button variant="outline-danger" onClick={() => this.props.delete(this.props.index)}>delete</Button>
            </div> 
            </div>
            </Card.Body>  
        </Card>
        </Row>
           
        
    
        );
    }
}

export default Todoitem;