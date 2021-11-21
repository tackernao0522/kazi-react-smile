import { Component } from 'react'

export default class WritePost extends Component {
  render() {
    return (
      <center>
        <div>
          <div class="jumbotron col-lg-4">
            <form>
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  name="title"
                  required
                />
              </div>
              <div class="form-group">
                <label for="body">Details</label>
                <textarea class="form-control" id="body" name="body">Write Here</textarea>
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
