import React, { useState, useContext } from 'react';
import { When } from 'react-if';
import { AuthContext } from '../../Context/Auth';
import { Button, Group, TextInput, createStyles } from '@mantine/core';

const styles = createStyles((theme) => ({
  form: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    gap: '10px',
    boxSizing: 'border-box',

  },
  loginButton: {
    backgroundColor: theme.colors.gray[7],
    justifyContent: 'space-evenly',
    margin: 'auto',
  },
  logoutButton: {
    backgroundColor: theme.colors.red[7],
    justifyContent: 'space-evenly',
    margin: 'auto',
  }
}));


const Login = () => {

  const { classes } = styles(); // this needs to be in the function
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, password);
    //event.target.reset(); 
  }

  return (
    <>
      <Group position='right'>
        <When condition={isLoggedIn}>
          <Button className={classes.logoutButton} onClick={logout}>Logout</Button>
        </When>
      </Group>

      <When condition={!isLoggedIn}>
        <form className={classes.form} onSubmit={handleSubmit}>
        {/* <Group onSubmit={handleSubmit} position='right'> */}
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
          <Button onClick={handleSubmit} className={classes.loginButton} type='submit'>Log In</Button>
        {/* </Group> */}
        </form>
      </When>

    </>
  )

};

export default Login;