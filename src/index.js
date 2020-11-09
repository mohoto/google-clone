import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateContextProvider} from './misc/stateProvider';
import reducer, {initialState} from './reducers/userReducer';

ReactDOM.render(
  <React.StrictMode>
    <StateContextProvider initialState = {initialState} reducer = {reducer}>
      <App />
    </StateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
