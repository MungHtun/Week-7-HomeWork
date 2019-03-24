import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/register";
import NewItem from "./components/newitem/newitem";
import List from './components/list/list';

class Blog extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLogin: false,
      userName: '',
      lists: [
        {         
          title: 'title',
          story: 'story'
        },
        {         
          title: 'title2',
          story: 'story2'
        },
      ]
    }
  }

  onClickHandler = (name) => {
    this.setState({
      isLogin: true,
      userName: name
    })
  }

    //1
    addNewItem = (value) => {
      const currentList = this.state.lists;
      currentList.push(value);
      this.setState({
          list: currentList
      })
  }


  render() {
    return (
      <React.Fragment>
        <Router>

          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* <li>
              <Link to="/register">Register</Link>
            </li> */}
          </ul>

          <Route
            exact
            path="/"
            component={props => <Home {...props} name={this.state.userName} />}
          />

          <Route path='/login'

            render={props => this.state.isLogin ?
              <Redirect to="/list"></Redirect> :
              <Login {...props} loginEvent={this.onClickHandler} />}
          />

          {/* <Route path='/register' component={Register} /> */}
          <Route path='/list' component={props =>
          <List {...props} name={this.state.lists} addNewEventHandler={this.addNewItem} />} />

          {/* <NewItem addNewEventHandler={this.addNewItem}/> */}

        </Router>
      </React.Fragment>

    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome from my website ! {this.props.name}</h2>
      </div>
    )
  }
}

export default Blog;