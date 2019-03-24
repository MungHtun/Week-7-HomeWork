import React, { Component } from 'react'

class list extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      story: ''
    }
  }

  onHandlerChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    this.props.addNewEventHandler(this.state);
    this.setState({
      title: '',
      story: ''
    })
  }

  render() {

    const Item = this.props.name.map((listItem, index) => (
      <div key={listItem.index}>
        <h1>{listItem.title}</h1>
        <p>{listItem.story}</p>
      </div>
    ));

    return (
      <div>

        {Item}

        <h1>Welcome From New Entry Form</h1>
        <form onSubmit={this.onSubmitHandler}>

          <div>
            <label>
              Title
            </label>
            <br />
            <input type='text'
              name='title'
              value={this.state.title}
              onChange={this.onHandlerChange}
            />
          </div>

          <div>
            <label>
              Story
            </label>
            <br />
            <textarea
              name='story'
              value={this.state.story}
              onChange={this.onHandlerChange}
            >
            </textarea>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>

        </form>
      </div>
    )
  }
}

export default list
