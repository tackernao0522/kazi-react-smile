import { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import App from './App'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Profile from './components/Profile'

export default class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to="/">Easy Learning</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link><Link to="/about">About Us</Link></Nav.Link>
                <Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
                <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
                <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    )
  }
}
