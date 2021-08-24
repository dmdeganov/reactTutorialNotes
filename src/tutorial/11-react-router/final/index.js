import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* //NOTE:without this the error page will be rendered on all other pages */}
        <Route exact path="/">
          {/* //NOTE:without exact the homepage will be rendered on other pages as well */}
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/person/:personID" children={<Person />}></Route>
        <Route path="*">
          {/* //NOTE:"*"" means that it always matches, for any url  */}
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
