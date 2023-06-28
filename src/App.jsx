import React from 'react';

import Todo from './Components/Todo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SettingsForm from './Components/SettingsForm';

export default class App extends React.Component {
  render() {
    return (
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/settings" element={<SettingsForm />} />
        </Routes>
      </BrowserRouter>

    );
  }
}
