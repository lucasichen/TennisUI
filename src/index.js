import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getConfig } from './config';
import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const config = getConfig();

root.render(
  <Auth0Provider
    domain={config.domain}
    clientId={config.clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
