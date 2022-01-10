import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import SignIn from './veiws/SignIn.js';
import SignUp from './veiws/SignUp.js';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavLink to="/signup">Sign Up </NavLink>
          <NavLink to="/signin">Sign In </NavLink>
        </header>
        <Switch>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
