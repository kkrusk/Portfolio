import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost'
import Post from './pages/Post'
import Login from './pages/Login'
import Register from './pages/Register'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Cookies from 'js-cookie';


function App() {
  const hasCookie = Cookies.get('k-portfolio-user')

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
              {!hasCookie && ( //conditional rendering based on whether or not user has cookie from line 13
                <>
                  <Nav.Link href="/register">Register</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </>
              )
              }
            </Nav>
          </Container>
        </Navbar>



        <div className='footer'>
          <a href="https://www.linkedin.com/in/kyle-kruskamp-441645148">
            <img
              loading="lazy"
              className="socialIcon"
              alt=''
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD///+Hh4fs7Ozm5uadnZ2Ojo6EhIR5eXmrq6uTk5Ph4eGIiIikpKR8fHzw8PD5+fnIyMjPz8/V1dW2tra+vr5sbGxQUFAWFhYxMTEpKSnCwsJlZWWlpaU/Pz9JSUkgICA4ODhYWFhycnIlJSVAQECBfPBeAAAD1klEQVR4nO2da1vCMAxGqTBhVETGxQuggvr//6KiIOguyWhC1j3v+UxdzjPWdmmCnQ4AAAAAAAAAAAAAAAAAAAAAAAAAALDi/S2d+F6357N08GQdjAJD707xN9YBCZO6PIl1UIIs7goEnRu/WAcmxajQb8ebdWgyzEsFnbu1Dk6CokfwyMo6vHAWlYLOPVgHGEzxJHNkYh1gKNXf0R331iEGQgq6zDrEMPq0oXu1DjKIjGHYtw4yCGqe2RH1XLNhCLqxdZQhrDiGzjrKEG5ZhjEv+pyp1LlH6zADGLAMX63DDGDLMrSOMoRHjuCddZRBjBmGcW/blgzDoXWQQbwxDCPPLLb9S9rpDEnD6BNu1FyztA4wmPtqwbiXih+SSsPYcxjfVKVqFtbByVB+F7fWoUmxLZ5uslfrwARJ8ukM35obuKc//eM3b5vfN6tknk2n2STtb6xDAQAAAAAAQI3nwXA2mXrvv/a+y3X/2ToeWT6Sae79zPVmF8gh3I8SgvyYFTXm+t+Ax1F5Ri/Trp27Kb30gfyY8kq/Pd0/H38hyiHuUtUj2KszDKuzc1/0Tj78NCGv4NysYYZknvzEkLzfe/RKknUN3z310V+81lm6qiGv1OPAID5DXqXHkXVjDK95hrxCj1PmcRnWvYM7NA661AzrPYMHFO6iliGryqMA+SYPLcPumYbyp11KhlUdDrWv10BDz6u1KmYahSGnEKkU4ZeNcwzp95EghEsHGmgoPJ+eY0iPCaT9hqPWG4o+iecY1t9S10WyKbCZhpJrYjMNJSs+G2oouGBcwtDP0yRZzzynBekwJCLD5cnLwnbGHvYei2Eu2Ut3dP4gl5ZSNex+5AdveLtyuRyxpmFJhXiPM7ZXPPZChswcU2nOhXUXTQ153VLljZmsHI5Y5aCaYTc/7hfyaMcJ9uaqGVYeQzBWRrGpRsuwelNCd3nIdR8rGVLvP/RfEJtMlQz/n3P/hz42FeuvVjKkLstYcJptSD5ET7Sh1AuUzopPT/X0qi9Va65jSBcD0Q+iVM+cjiF9XXrRl9rUqBgycmX07l3qEErFsGrHtoc+u5F6Q1QxZKzWG/K6UhtTK8OH1hvS+zYYahqS8yAMYQhDGMKQNCTHwLDxhmS1CQxhaG7IrIKGIQxhCEMYwhCGMIShqWGdHlIYwhCGMIQhDGEIw6Ya1vrlDxjCEIYwhCEMW2pI/vYTDGFobriGYfSGZB8oDGEIQ3VDsucchjAUNTznN2gvY3glZHg77hLkx6TEmDHnx1eoy45b8Y/rAQAAAAAAAAAAAAAAAAAAAAAAAADi4ROq8EbESHvjyAAAAABJRU5ErkJggg=="
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
