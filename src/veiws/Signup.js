import React from 'react';
import AuthForm from '../components/AuthForm';
import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Sign Up page:</h1>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      ></AuthForm>
    </div>
  );
}
