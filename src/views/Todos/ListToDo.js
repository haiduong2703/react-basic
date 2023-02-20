import React from "react";
import './ListToDos.scss';
import AddTodo from "./AddTodo";


class ListToDo extends React.Component{
    state = {
        ListToDos:[
            {id:'todo1', title:'Doing Homework'},
            {id:'todo2', title:'Making Video'},
            {id:'todo3', title:'Debug'}
        ],
        editTodo:{}
    }
    
    addNewTodo = (todo)=>{
        this.setState({
            ListToDos: [...this.state.ListToDos,todo]
        })
        
    }
    deleteTodo = (todo)=>{
        let currentTodo = this.state.ListToDos;
        currentTodo = currentTodo.filter(item => item.id!==todo.id);
        this.setState({
            ListToDos: currentTodo
        })
    }
    handleEdit = (todo)=>{
        let {ListToDos,editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        if(isEmptyObj===false&&editTodo.id === todo.id){
            let ListToDosCopy = [...ListToDos]
            let objIndex = ListToDosCopy.findIndex((item => item.id === todo.id));

            //Log object to Console.
            

            //Update object's name property.
            ListToDosCopy[objIndex].title = editTodo.title;

            this.setState({
                ListToDos: ListToDosCopy,
                editTodo:{}
            })

            return;
        }

        this.setState({
            editTodo:todo
        })


    }
    handleOnchangEdit = (event)=>{
        let edit = {...this.state.editTodo};
        edit.title = event.target.value;
        this.setState({
            editTodo: edit
        })
    }
    render(){
        let {ListToDos,editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        return (
            <div className="list-todo-container">
                <AddTodo
                addNewTodo = {this.addNewTodo} 
                />
                <div className="list-todo-content" >
                    {ListToDos && ListToDos.length > 0 &&
                        ListToDos.map((item, index)=>{
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ? 
                                    <span>{index+1}-{item.title}</span>
                                    :
                                    <>
                                        { item.id===editTodo.id?
                                        <span>{index+1}-<input value={editTodo.title} onChange={(event)=>this.handleOnchangEdit(event)}/></span>
                                        :
                                        <span>{index+1}-{item.title}</span>
                                        }
                                    </>

                                    }
                                    <button className="edit" onClick={() => this.handleEdit(item)}>
                                        
                                        {isEmptyObj===false && editTodo.id === item.id?
                                        'Save':'Edit'
                                        
                                        }
                                    </button>
                                    <button onClick={()=>this.deleteTodo(item)}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>   
        )
    }
}

export default ListToDo;