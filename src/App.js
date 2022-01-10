import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import Auth from './views/Auth/Auth.js';
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
        <Header> </Header>
        <Switch>
          <Route exact path="/">
            {user ? (
              <div>
                <h1>this is me signed in</h1>
                <button onClick={logoutUser}>logout</button>
              </div>
            ) : (
              <div>
                <Auth setUser={setUser}></Auth>
              </div>
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
