import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './main.css';
import App from './App';

ReactDOM.render(
    <HashRouter> 
        <App />
    </HashRouter>
// Now that the application is wrapped with HashRouter, we can render our router any where in the app
    , document.getElementById('root'));
