import React, { Component } from 'react'

class register extends Component {
  render() {
    return (


      <React.Fragment>
       

        <form>
        <h1>Register Page</h1>
          <label>User Name
          <input type="text" />
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

export default register
