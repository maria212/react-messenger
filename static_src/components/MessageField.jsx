import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message'
import { TextField , FloatingActionButton } from 'material-ui';
import IconSend from 'material-ui/svg-icons/content/send';
import Chip from 'material-ui/Chip';
import { sendMessage } from "../actions/messageActions";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

//import './messsageField.css';

const styles = {
    messageElements: {
        display: 'flex',
        flexDirection: 'column'
    },
    chipSenderMe: {
      margin: 4,
      alignSelf: 'flex-end',
    },
    chipSenderOther: {
        margin: 4,
        alignSelf: 'flex-start',
      },
      TextField: {
          width: '360px',
      }};

class MessageField extends React.Component {

    static PropTypes = {
        chatId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
    };
    
    static defaultProps = {
        chatId: 1,
    };

    state = {
        input: '',
    }; 

    /**
     * Событие набора 1 буквы в поле ввода
     */
    handleType = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    /**
     * Событие нажатия кнопки отправки сообщения
     */
    handleSendMessage = () => {
        const { input } = this.state;
        const { chatId , messages} = this.props;

        if (input.length>0) {
            const messageId = Object.keys(messages).length + 1; 
            this.props.sendMessage(messageId, input, 'me', chatId); //вызов messageActions
            this.setState({
                input: '',
            });
        }
    };

    /**
     * Событие нажатия Enter при активном поле ввода
     */
    handleKeyUp = (event) => {
        if (event.keyCode === 13) this.handleSendMessage();
    };

    render() {
        const {chatId, messages, chats} = this.props;

        const messageElements = chats[chatId].messageList.map((msgId, index) => (
                <Chip 
                    className={"chip-component"} 
                    style={messages[msgId].sender==='me' ?  styles.chipSenderMe : styles.chipSenderOther} 
                    key = {index} 
                >
                <Message className={'message-component'} key = {index} text = {messages[msgId].text} sender = {messages[msgId].sender} />
                </Chip>     
            ));

        return  <div> 
            <div className='message-elements' style={styles.messageElements}>
                {messageElements}
            </div>
            <TextField  
                onChange = {this.handleType}
                name = "input"    
                value = {this.state.input} 
                onKeyUp={this.handleKeyUp}       
                style={styles.TextField}
                />
            <FloatingActionButton onClick = { this.handleSendMessage } mini = { true } backgroundColor = "#ff4081">
            <IconSend color = "white"/>
            </FloatingActionButton> 
        </div> 
    }
}

const mapStateToProps = ({ messageReducer, chatReducer }) => ({
   messages: messageReducer.messages,
   chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch); //все action прокидывать в эту функцию

//декорируем, обертка. connect прокидывает в props 
export default connect(mapStateToProps, mapDispatchToProps)(MessageField);