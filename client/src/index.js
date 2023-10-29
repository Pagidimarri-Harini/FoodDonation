import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the main App component
import { AuthProvider } from './components/AuthContext';
ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
