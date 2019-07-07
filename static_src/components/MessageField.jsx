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
      }};

class MessageField extends React.Component {

    static PropTypes = {
        chatId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
        messages: PropTypes.object.isRequired
    }
    
    static defaultProps = {
        chatId: 1,
    };

       state = {
        // messages: {  // перенесли в редьюсер
        chats: {
             // Ключи - ID чатов
            1: {tittle: 'Chat 1', messageList: [1, 6]},
            2: {tittle: 'Chat 2',  messageList: [2]},
            3: {tittle: 'Chat 3',  messageList: [2, 7]},
            4: {tittle: 'Chat 4',  messageList: [4]},
            5: {tittle: 'Chat 5',  messageList: [5]},
        },
        input: '',
    } 

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
        const { chats, input } = this.state;
        const { chatId , messages} = this.props;

        if (input.length>0) {
            const messageId = Object.keys(messages).length + 1; 
            this.props.sendMessage(messageId, input, 'me', chatId); //вызов messageActions
            this.setState({
                chats: { ...chats, [chatId]: { ...chats[chatId], messageList: [ ...chats[chatId]['messageList'], messageId] } }, 
                input: '',
            });
        }
    };

    /**
     * Событие нажатия Enter при активном поле ввода
     */
    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.handleSendMessage();
        }
    };

    /**
     * Отправка ответа бота
     */
    sendAnswer = () => {
        const { chats } = this.state;
        const { chatId, messages } = this.props;

        const messageId = Object.keys(messages).length + 1; 
        this.props.sendMessage(messageId, "I'm bot", 'bot', chatId);
        this.setState({
           chats: {...chats, [chatId]: {...chats[chatId], messageList: [...chats[chatId]['messageList'], messageId]}}
        });
    };

    componentDidUpdate(prevProps, prevState) {
        /* console.log('componentDidUpdate');
        console.log('prevState:', prevState, 'prevProps:', prevProps);
        console.log('thisState:', this.state, 'thisProps:', this.props); */

        const {messages} = this.props;

        if ((Object.keys(prevProps.messages).length < Object.keys(messages).length)
                &&  Object.values(messages)[Object.keys(messages).length - 1].sender === "me") {
            setTimeout(this.sendAnswer, 500);
        }
    }

    render() {
        const {chats} = this.state;
        const {chatId, messages} = this.props;

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
                />
            <FloatingActionButton onClick = { this.handleSendMessage } mini = { true } backgroundColor = "#ff4081">
            <IconSend color = "white"/>
            </FloatingActionButton> 
        </div> 
    }
}

const mapStateToProps = ({ messageReducer }) => ({
   messages: messageReducer.messages,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch); //все action прокидывать в эту функцию

//декорируем, обертка. connect прокидывает в props 
export default connect(mapStateToProps, mapDispatchToProps)(MessageField);