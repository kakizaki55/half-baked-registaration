import React from 'react';
import AuthForm from '../components/AuthForm';
import { useState } from 'react';
import { signInUser } from '../services/users';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleForm = async (e) => {
    e.preventDefault();
    const data = await signInUser(email, password);
    console.log(data);
  };

  return (
    <div>
      <h1>Sign Up page:</h1>
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
