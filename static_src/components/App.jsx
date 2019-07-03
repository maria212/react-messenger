import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Profile from './Profile';

//import './style.css';

export default class App extends React.Component {
    render() {
        return(
        <Switch>
            <Route exact path='/static_src/' component={Layout}/>
            <Route exact path='/static_src/profile/' component={Profile}/>
            <Route exact path='/static_src/chat/:chatId/' render={ obj => 
                <Layout chatId={ Number(obj.match.params.chatId) }/> 
            }/> 
        </Switch>
        )
    }
}