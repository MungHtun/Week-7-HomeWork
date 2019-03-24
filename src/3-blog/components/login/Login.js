import React, { Component } from 'react'

class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       userName: ''
    }
  }
  

  handlerUserNameChange = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    const name = this.state.userName;
    this.props.loginEvent(name);
    event.preventDefault();    
  }

  render() {
    return (
      <React.Fragment>

        <form onSubmit={this.handleOnSubmit}>
          <h1>Login Page</h1>
          <label>User Name
            <input type="text" value={this.state.userName} onChange={this.handlerUserNameChange}/>
          </label>
          <br />
          <label>
            Password
            <input type="password" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>

      </React.Fragment>
    )
  }
}

export default Login
