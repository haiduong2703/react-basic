import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div class="topnav">
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/todo" activeClassName="active">
          Todos
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/user" activeClassName="active">
          User
        </NavLink>

        {/* <a class="active" href="/">Home</a>
                <a href="/todo">Todo</a>
                <a href="/about">About</a> */}
      </div>
    );
  }
}

export default Nav;
