import axios from 'axios'
import { Component } from 'react'

export default class WritePost extends Component {
  state = {
    title: '',
    body: '',
  }

  formSubmit = (e) => {
    e.preventDefault()
    axios
      .post('/user', { // Where this url will be redirect
        title: this.state.title, // All that value its will take
        body: this.state.body,
      })
      .then((response) => { // use for success
        console.log(response)
      })
      .catch((error) => { // use for error
        console.log(error)
      })
  }

  render() {
    return (
      <center>
        <div>
          <div class="jumbotron col-lg-4">
            <form onSubmit={this.formSubmit}>
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  name="title"
                  required
                  onChange={(event) =>
                    this.setState({ title: event.target.value })
                  }
                />
              </div>
              <div class="form-group">
                <label for="body">Details</label>
                <textarea
                  class="form-control"
                  id="body"
                  name="body"
                  onChange={(event) =>
                    this.setState({ body: event.target.value })
                  }
                >
                  Write Here
                </textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Publish
              </button>
            </form>
          </div>
        </div>
      </center>
    )
  }
}
