import React  from "react";

class AddComponent extends React.Component{
    state = {
        title: "",
        salary: "",
    }
    handleOnChangeTitle = (event) => {
        this.setState({
          title: event.target.value
          
        });
      };
      handleOnChangeSalary = (event) => {
        this.setState({
          
          salary: event.target.value
        });
      };
      handleSubmit = ()=>{
        if(!this.state.title||!this.state.salary){
          alert("Missing required params")
        }
        this.props.addJobNew({
          id: Math.floor(Math.random()*1001),
          title: this.state.title,
          salary: this.state.salary
        })
        this.setState({
          title:'',
          salary:''
        })
      }
    render(){
        
        return(
        <form>
          <label htmlFor="fname">Title Job:</label>
          <br />
          <input type="text" id="fname" name="fname" value={this.state.title} onChange={(event)=>this.handleOnChangeTitle(event)} />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input type="text" id="lname" name="lname" value={this.state.salary} onChange={(event)=>this.handleOnChangeSalary(event)}/>
          <br />
          <br />
          <input type="button" value="Submit"
          onClick={()=>this.handleSubmit()}
          />
        </form>
        )
    }
}

export default AddComponent;