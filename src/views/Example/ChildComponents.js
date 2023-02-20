import React from "react";

class ChildComponent extends React.Component {
  state = {
    showHide: false,
  };
  handleShowHide = () => {
    this.setState({
      showHide: !this.state.showHide,
    });
  };
  handleOnclickDelete = (job) => {
    this.props.deleteAJob(job);
  };
  render() {
    let { arrJobs } = this.props;

    return (
      <>
        {this.state.showHide === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item) => {
                if (+item.salary >= 500) {
                  return (
                    <div key={item.id}>
                      {item.title}-{item.salary} <></>
                      <span onClick={() => this.handleOnclickDelete(item)}>
                        x
                      </span>
                    </div>
                  );
                }
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
