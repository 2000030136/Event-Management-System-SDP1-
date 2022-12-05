import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Connect from './components/pages/Connect';
import Events from './components/pages/Events';
import SignUp from './components/pages/Signup';
import SignIn from './components/pages/Signin';
import Business from './components/pages/Business';
import Cultural from './components/pages/Cultural';
import Family from './components/pages/Family';
import Sports from './components/pages/Sports';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import LiveDemo from './components/pages/LiveDemo';
import Verified from './components/pages/Verified';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/connect' component={Connect} />
          <Route path='/events' component={Events} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/business' component={Business} />
          <Route path='/cultural' component={Cultural} />
          <Route path='/family' component={Family} />
          <Route path='/sports' component={Sports} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/ContactUs' component={ContactUs} />
          <Route path='/LiveDemo' component={LiveDemo} />
          <Route path='/Verified' component={Verified} />
        </Switch>
      </Router>
    </>
  );
}
export default App;