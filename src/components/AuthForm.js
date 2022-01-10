import React from 'react';

export default function AuthForm({ email, setEmail, password, setPassword }) {
  return (
    <div>
      <form>
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
      </form>
    </div>
  );
}
