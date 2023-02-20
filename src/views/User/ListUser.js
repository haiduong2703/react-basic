import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./User.scss";
class ListUser extends React.Component {
  state = {
    ListUsers: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      ListUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handleClick = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };
  render() {
    let { ListUsers } = this.state;

    return (
      <div className="list-user-container">
        <div className="list-user-content">
          {ListUsers &&
            ListUsers.length > 0 &&
            ListUsers.map((item, index) => {
              return (
                <div
                  className="child"
                  key={index}
                  onClick={() => this.handleClick(item)}
                >
                  <div>
                    {index + 1}-{item.first_name}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default withRouter(ListUser);
