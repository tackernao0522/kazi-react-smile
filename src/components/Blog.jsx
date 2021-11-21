import axios from 'axios'
import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Blog extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({ posts: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const posts = this.state.posts
    const allPosts = posts.map((post, idx) => (
      <div>
        <a href="" key={idx}>{post.title}</a>
        <br />
        <p>{post.body}</p>
      </div>
    ))

    return (
      <div>
        <h1>This is Blog Component</h1>
          <Link to="/writePost">Add New</Link>
        <div class="media">
          <div class="media-body text-center">{allPosts}</div>
        </div>
      </div>
    )
  }
}
