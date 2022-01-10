import React from 'react';
import AuthForm from '../components/AuthForm';
import { useState } from 'react';
import { signInUser } from '../services/users';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
    } catch {
      setErrorMessage('Oops, looks like something went wrong');
    }
  };

  return (
    <div>
      <h1>Sign In page:</h1>
      <p>{errorMessage}</p>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleForm={handleForm}
      ></AuthForm>
    </div>
  );
}
