import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import '@fontsource/ibm-plex-sans'
import '@fontsource/ibm-plex-sans/700.css'
import './index.css';
import StationsMonitor from './StationsMonitor';
import reportWebVitals from './reportWebVitals';
import Modal from 'react-modal';
Modal.defaultStyles.overlay.zIndex = '20';
Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <StationsMonitor />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
