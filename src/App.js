import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';

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
        <Header logoutUser={logoutUser}></Header>
        <Switch>
          <Route exact path="/">
            {user ? (
              <div>
                <h1>congrats me!</h1>
                <iframe
                  src="https://giphy.com/embed/14cDsqOkks6O8U"
                  width="480"
                  height="480"
                  frameBorder="0"
                  className="giphy-embed"
                ></iframe>

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
