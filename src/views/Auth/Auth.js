import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useState } from 'react';
import { signInUser, signUpUser } from '../../services/users';
import './Auth.css';

export default function SignUp({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [type, setType] = useState('signin');

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const data =
        type === 'signin' ? await signInUser(email, password) : await signUpUser(email, password);
      setUser(data);
    } catch {
      setErrorMessage('Oops, looks like something went wrong');
    }
  };

  return (
    <div>
      <p>{errorMessage}</p>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleForm={handleForm}
        setType={setType}
        type={type}
      ></AuthForm>
    </div>
  );
}
