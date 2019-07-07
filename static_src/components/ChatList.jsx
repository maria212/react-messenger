import React from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

const styles = {
    chatlist: {
      width: "200px",
    }};

export default class ChatList extends React.Component {
    render() {
        return (
        //<div> 
            <List style={styles.chatlist}>
               <Link to="/static_src/chat/1/"><ListItem primaryText="Chat 1" leftIcon={<ContentDrafts />} key = {1}/></Link> 
               <Link to="/static_src/chat/2/"><ListItem primaryText="Chat 2" leftIcon={<ContentDrafts />} key = {2}/></Link> 
               <Link to="/static_src/chat/3/"><ListItem primaryText="Chat 3" leftIcon={<ContentDrafts />} key = {3}/></Link> 
               <Link to="/static_src/chat/4/"><ListItem primaryText="Chat 4" leftIcon={<ContentDrafts />} key = {4}/></Link> 
               <Link to="/static_src/chat/5/"><ListItem primaryText="Chat 5" leftIcon={<ContentDrafts />} key = {5}/></Link> 
            </List>
       // </div> 
        )
    }
}