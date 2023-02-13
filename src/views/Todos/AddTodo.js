import React from "react";

class AddTodo extends React.Component{
    state = {
        id: '',
        title: ''
    }
    handleTitle = (event)=>{
        this.setState({
            title: event.target.value
        })
    }
    handleAdd = ()=>{
        if(!this.state.title){
            alert('Missing title');
        }
        this.props.addNewTodo({
            id: Math.floor(Math.random()*1001),
            title: this.state.title
        })
        this.setState({
            id:'',
            title:''
        })
    }
    render(){
        return (
            <div className="add-todo">
                    <input type="text" value={this.state.title} onChange={(event)=>this.handleTitle(event)}/>
                    <button className="add" type="button" onClick={()=>this.handleAdd()} >Add</button>
            </div>
        )
    }

}

export default AddTodo