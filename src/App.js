import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './App.css';

const Menu = () => (
  <Fragment>
    <NavLink activeClassName="activeLink" exact to="/" >Home</NavLink>
    <NavLink activeClassName="activeLink" to="/about" >About</NavLink>
    <NavLink activeClassName="activeLink" exact to="/nested" >Nested</NavLink>
    <NavLink activeClassName="activeLink" to="/nested/child" >Child</NavLink>
  </Fragment>
)

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>

const Child = () => <h2>Child component</h2>

const Nested = props => {
  return (<Fragment>
          <h1>Nested component</h1>
          <Route path={props.match.url + '/child'} component={Child} />
        </Fragment>)
}



class App extends Component {
  render() {
    return (
        <Router>
          <Fragment>
            <Menu  />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/nested' component={Nested} />
          </Fragment>
        </Router>
    );
  }
}

export default App;
