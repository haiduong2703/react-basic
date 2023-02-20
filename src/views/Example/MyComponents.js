import React from "react";
import ChildComponent from "./ChildComponents";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    
    arrJobs:[
      {id:'1', title:"Developer",salary:'500'},
      {id:'2', title:"Tester",salary:'400'},
      {id:'3', title:"Manager",salary:'800'}
    ]
  };

  
  addJobNew = (job)=>{
    this.setState({
      arrJobs:[...this.state.arrJobs,job]
    })
  }

  deleteAJob = (job)=>{
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter(item=>item.id !== job.id)
    this.setState({
      arrJobs:currentJob
    })
  }
  render() {
    return (
      <>
        <AddComponent
          addJobNew = {this.addJobNew}
        />
        <ChildComponent arrJobs={this.state.arrJobs} deleteAJob={this.deleteAJob}/>
      </>
    );
  }
}

export default MyComponent;
