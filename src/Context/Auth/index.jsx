import React from 'react'; //, { useEffect }
import { useState } from 'react';
// import testUsers from './lib/users.js';
import jwt_decode from 'jwt-decode';
import { cookie } from 'react-cookies';
import axios from 'axios';

export const AuthContext = React.createContext();

function AuthProvider({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  // const [token, setToken] = useState(''); //copilot suggested this

  //react_cookie__WEBPACK_IMPORTED_MODULE_4__.cookie is undefined
  // useEffect (() => {
  // let cookieToken = cookie.load('auth');
  // _validateToken(cookieToken);
  // }, []);

  const _validateToken = token => {
    try {
      // if token is valid, then we have a user assigned to the validUser variable
      let validUser = jwt_decode(token);
      console.log('Valid User', validUser);
      if (validUser) {
        //save cookie
        // cookie.save('auth', token);
        setUser(validUser);
        setIsLoggedIn(true);
        // console.log('User is logged in', isLoggedIn);
      }
    }
    catch (error) {
      setError(error);
      console.log('User Token Validation Error', error);
    }

  };

  const login = async (username, password) => {
    let config = {
      baseURL: 'https://api-js401.herokuapp.com',
      url: '/signin',
      method: 'post',
      auth: { username, password }
    }
    let response = await axios(config);
    console.log('user--------------', response.data);
    let token = response.data.token;

    // let user = testUsers[username];
    if (token) {
      try {
        _validateToken(user.token);
      } catch (error) {
        setError(error);
        console.log('Login Error', error);
      }
    }
  };

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
  };

  //authorize function for lab
  const can = (capability) => {
    return user?.capabilities?.includes(capability); //will return true if each aspect is met
  };

  const values = {
    isLoggedIn,
    user,
    error,
    login,
    logout,
    can,
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;