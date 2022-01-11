import React from 'react';
import './AuthForm.css';
import classNames from 'classnames';

export default function AuthForm({
  email,
  setEmail,
  password,
  setPassword,
  handleForm,
  setType,
  type,
}) {
  return (
    <div className="form-box-div">
      <div>
        <h5 onClick={() => setType('signup')} className={classNames({ active: type === 'signup' })}>
          Sign Up
        </h5>
      </div>
      <div>
        <h5 onClick={() => setType('signin')} className={classNames({ active: type === 'signin' })}>
          Sign In
        </h5>
      </div>
      <form className="form-box">
        <label>E-Mail:</label>
        <input
          placeholder="email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label>Password:</label>
        <input
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button onClick={handleForm}>Submit</button>
      </form>
    </div>
  );
}
