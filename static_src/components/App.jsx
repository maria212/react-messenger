import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Message from './Message';


//import './style.css';

export default class App extends React.Component {

    render() {
        return(
        <Switch>
            <Route exact path='/static_src/' component={Layout}/>
            <Route exact path='/static_src/profile/' render={()=>{ //TODO Исправить на открытие профиля юзера
                <Message text='123423543' sender='me'/>
            }}/>
            <Route exact path='/static_src/chat/:chatId/' render={ obj => 
                //console.log(obj) }/> 
            <Layout chatId={ Number(obj.match.params.chatId) }/> }/> 
        
        </Switch>
        )
    }
}