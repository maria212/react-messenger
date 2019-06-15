import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

const styles = {
    chatlist: {
      width: "200px",
    }};

export default class ChatList extends React.Component {

   

    render() {
        return  <div> 

            <List style={styles.chatlist}>
            <ListItem primaryText="Inbox" leftIcon={<ContentDrafts />} key = {1}/>
            <ListItem primaryText="Starred" leftIcon={<ContentDrafts />} key = {2}/>
            <ListItem primaryText="Sent mail" leftIcon={<ContentDrafts />} key = {3}/>
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} key = {41}/>
            <ListItem primaryText="Inbox" leftIcon={<ContentDrafts />} key = {17}/>
            </List>
       
 
        </div> 

    }
}