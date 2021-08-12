import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost'
import Post from './pages/Post'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <div className="App">
      <Router>
        {/* 
        <nav class="navbar">
          <img className='brandIcon' alt="Brand" src="https://cdn1.iconfinder.com/data/icons/andriod-app-logo/32/icon_k-512.png" />
          <ul>
            <li><a class="active" href="#home" title="Home">Home</a></li>
            <li><a href="#portfolio" title="Portfolio">Portfolio</a></li>
            <li><a href="#about" title="About">About</a></li>
            <li><a href="#contact" title="Contact">Contact</a></li>
          </ul>
        </nav>

        <section id="home" class="page">
          <div class="container">
            <h2>Home</h2>
          </div>
        </section>

        <section id="portfolio" class="page">
          <div class="container">
            <h2>Portfolio</h2>
          </div>
        </section>

        <section id="about" class="page">
          <div class="container">
            <h2>About</h2>
          </div>
        </section>

        <section id="contact" class="page">
          <div class="container">
            <h2>Contact</h2>
          </div>
        </section> */}

        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">
                <img className='brandIcon' alt="Brand" src="https://cdn1.iconfinder.com/data/icons/andriod-app-logo/32/icon_k-512.png" />
                <Link to="/"> Home </Link>
                <Link to="/create_post"> Create Post </Link>
                <Link to="/register"> Register </Link>
                <Link to="/login"> Login </Link>
              </a>
            </div>
          </div>
        </nav>

        <Switch>
          {/* exact allows only one component to route at a time */}
          <Route path='/' exact component={Home} />
          <Route path='/create_post' exact component={CreatePost} />
          <Route path='/posts/byId/:id' exact component={Post} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
        </Switch>
      </Router>
    </div>
  )
}

<script src="src/js/scrollspy.js"></script>
export default App;
