import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    let res = await axios.get(
      `https://reqres.in/api/users/${this.props.match.params.id}`
    );
    this.setState({
      user: res && res.data && res.data.data ? res.data.data : {},
    });
  }
  handleBack = () => {
    this.props.history.push("/user");
  };
  render() {
    let { user } = this.state;
    return (
      <>
        <div>hello detail user {this.props.match.params.id}</div>
        <div>
          Full name: {user.first_name} {user.last_name}
        </div>
        <div>Email: {user.email}</div>
        <div>
          <img src={user.avatar} alt="avatar" />
        </div>
        <button onClick={() => this.handleBack()}>Back</button>
      </>
    );
  }
}
export default withRouter(DetailUser);
