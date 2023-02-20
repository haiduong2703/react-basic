import logo from "./logo.svg";
import "./App.scss";
import React, { version } from "react";
import MyComponent from "./Example/MyComponents";
import ListToDo from "./Todos/ListToDo";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import ListUser from "./User/ListUser";
import DetailUser from "./User/DetailUser";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <p>Simple TODO APP</p>
          <Home />
          <Switch>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
