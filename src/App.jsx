import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from './Components/Auth';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SettingsForm from './Components/SettingsForm';
import Todo from './Components/Todo';


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Auth capability="read">
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/settings" element={<SettingsForm />} />
          </Routes>
        </Auth>
        <Footer />
      </BrowserRouter>

    );
  }
}

      // <Auth capability="read">
      //  <p>I can read!</p>
      //  <Auth/>