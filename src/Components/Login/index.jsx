import React, { useState, useContext } from 'react';
import { When } from 'react-if';
// import { SettingsContext } from '../../Context/Settings';
import { AuthContext } from '../../Context/Auth';
import { Button, TextInput, createStyles } from '@mantine/core';



const styles = createStyles((theme) => ({
  form: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    gap: '10px',
    boxSizing: 'border-box',
    
  }
}));


const Login = () => {
  
  const { classes } = styles(); // this needs to be in the function
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
  console.log('isLoggedIn', isLoggedIn);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, password);
    //event.target.reset(); 
  }

  return (
    <>
    
      <When condition={isLoggedIn}>
        <Button onClick={logout}>Logout</Button>
      </When>

      <When condition={!isLoggedIn}>
        <form className={classes.form} onSubmit={handleSubmit}>
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
          <Button type='submit'>Log In</Button>
        </form>
      </When>

    </>
  )

};

export default Login;