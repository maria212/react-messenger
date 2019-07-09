import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';
import { push } from 'react-router-redux'; //Pushes a new location to history, becoming the current location.
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import connect from "react-redux/es/connect/connect";
import chatReducer from '../reducers/chatReducer';
import {bindActionCreators} from "redux";

const styles = {
    chatlist: {
      width: "200px",
    }};

class ChatList extends React.Component {
    static PropTypes = {
        push: PropTypes.func.isRequired,
    }

    handleNavigate = (link) => {
        this.props.push(link);
    }

    render() {
        return (
        //<div> 
            <List style={styles.chatlist}>
                {/* если передаем в onClick функцию, нужно передать ее без скобок, т е НЕ ВЫЗЫВАЯ */}
               <ListItem onClick={ () => this.handleNavigate("/static_src/chat/1/") } primaryText="Chat 1" leftIcon={<ContentDrafts />} key = {1}/>
               <ListItem onClick={ () => this.handleNavigate("/static_src/chat/2/") } primaryText="Chat 2" leftIcon={<ContentDrafts />} key = {2}/> 
               <ListItem onClick={ () => this.handleNavigate("/static_src/chat/3/") }primaryText="Chat 3" leftIcon={<ContentDrafts />} key = {3}/> 
               <ListItem onClick={ () => this.handleNavigate("/static_src/chat/4/") }primaryText="Chat 4" leftIcon={<ContentDrafts />} key = {4}/>
               <ListItem onClick={ () => this.handleNavigate("/static_src/chat/5/") }primaryText="Chat 5" leftIcon={<ContentDrafts />} key = {5}/> 
            </List>
       // </div> 
        )
    }
}

//т к это action., нужен подвал
const mapStateToProps = ({ }) => ({
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch); //все action прокидывать в эту функцию
 
 //декорируем, обертка. connect прокидывает в props 
 export default connect(mapStateToProps, mapDispatchToProps)(ChatList);