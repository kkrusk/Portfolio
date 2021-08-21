import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost'
import Post from './pages/Post'
import Login from './pages/Login'
import Register from './pages/Register'
import { Nav, Navbar, Container } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Router>

        <Navbar className='sticky-nav' bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src="https://image.flaticon.com/icons/png/512/32/32030.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create_post">Create Post</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className='footer'>
          <a href="https://www.linkedin.com/in/kyle-kruskamp-441645148">
            <img
              loading="lazy"
              className="socialIcon"
              alt=''
              src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png"
              width="30"
              height="30">
            </img>
          </a>

          <a href="https://www.instagram.com/kkrusk">
            <img
              loading="lazy"
              className="socialIcon"
              alt=''
              src="https://blog-assets.hootsuite.com/wp-content/uploads/2018/09/glyph-logo_May2016-150x150.png"
              width="30"
              height="30">
            </img>
          </a>
        </div>

        <Switch>
          {/* exact allows only one component to route at a time */}
          <Route path='/' exact component={Home} />
          <Route path='/create_post' exact component={CreatePost} />
          <Route path='/post/:id' exact component={Post} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
        </Switch>
      </Router>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js" />


    </div >
  )
}

export default App;
