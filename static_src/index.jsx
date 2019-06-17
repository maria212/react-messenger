import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MessageField from './components/MessageField';
import Layout from './components/Layout';

import './style.css';

ReactDOM.render(
    <MuiThemeProvider>
   {/*  <MessageField /> */}
    <Layout />
    </MuiThemeProvider>
    , document.getElementById('root'),
);