import React from 'react';

import Todo from './Components/Todo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SettingsForm from './Components/SettingsForm';
import Footer from './Components/Footer';
import Header from './Components/Header';


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/settings" element={<SettingsForm />} />
          </Routes>
        
        <Footer />
      </BrowserRouter>

    );
  }
}

      // <Auth capability="read">
      //  <p>I can read!</p>
      //  <Auth/>