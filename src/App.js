import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import SignIn from './views/SignIn.js';
import SignUp from './views/SignUp.js';
import Auth from './views/Auth.js';
import { getUser, logout } from './services/users';
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState(getUser());

  const logoutUser = async () => {
    await logout();
    setUser(null);
  };

  return (
    <>
      <BrowserRouter>
        <header>
          <NavLink to="/signup">Sign Up </NavLink>
          <NavLink to="/signin">Sign In </NavLink>
        </header>
        <Switch>
          <Route exact path="/">
            {user ? (
              <div>
                <h1>this is me signed in</h1>
                <button onClick={logoutUser}>logout</button>
              </div>
            ) : (
              <div>
                <Auth></Auth>
              </div>
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
