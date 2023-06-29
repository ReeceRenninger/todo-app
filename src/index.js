import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SettingsProvider from './Components/Context/Settings';
import { MantineProvider } from '@mantine/core';
import AuthProvider from './Components/Context/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode >
);
