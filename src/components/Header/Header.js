import React from 'react';
import './Header.css';

export default function Header({ logoutUser }) {
  return (
    <>
      <header>
        <button onClick={logoutUser}>Logout</button>
      </header>
    </>
  );
}
