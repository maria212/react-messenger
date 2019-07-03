import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MessageField from './components/MessageField';
import Layout from './components/Layout';

//import './style.css';

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </BrowserRouter>
    , document.getElementById('root'),
);