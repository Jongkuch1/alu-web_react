import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import Notifications from './Notifications/Notifications.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>,
  document.getElementById('root-notifications')
);
