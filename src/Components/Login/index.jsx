import React, { useState, useContext } from 'react';
import { When } from 'react-if';
// import { SettingsContext } from '../../Context/Settings';
import { AuthContext } from '../../Context/Auth';
import { Button, TextInput } from '@mantine/core';

const Login = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { isLoggedIn, login, logout } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    Login(username, password);
    //event.target.reset(); 
  }

  return (
    <>
    
      <When condition={isLoggedIn}>
        <Button onClick={logout}>Logout</Button>
      </When>

      <When condition={!isLoggedIn}>
        <form onSubmit={handleSubmit}>
          <TextInput
            placeholder='Username'
            name='username'
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextInput
            placeholder='password'
            name='password'
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button onClick={login}>Log In</Button>
        </form>
      </When>

    </>
  )

};

export default Login;