import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message'
import { TextField , FloatingActionButton } from 'material-ui';
import IconSend from 'material-ui/svg-icons/content/send';
import Chip from 'material-ui/Chip';

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

export default class MessageField extends React.Component {

    static PropTypes = {
        chatId: PropTypes.number,
    }
    
    static defaultProps = {
        chatId: 1,
    };

       state = {
        messages: {
            /**
             * Ключи - ID сообщений
             */
            1: {text: "Hello", sender: "me"},
            2: {text: "Hi", sender: "me"},
            3: {text: "Hey", sender: "me"},
            4: {text: "Wow", sender: "me"},
            5: {text: "Yeah", sender: "me"},
            6: {text: ":=)", sender: "me"},
            7: {text: ":=(", sender: "me"},
        },
        chats: {
            /**
             * Ключи - ID чатов
             */
            1: {tittle: 'Chat 1', messageList: [1, 6]},
            2: {tittle: 'Chat 2',  messageList: [2]},
            3: {tittle: 'Chat 3',  messageList: [2, 7]},
            4: {tittle: 'Chat 4',  messageList: [4]},
            5: {tittle: 'Chat 5',  messageList: [5]},
        },
        input: ''
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
        const { messages, chats, input } = this.state;
        const { chatId } = this.props;

        if (input.length>0) {
            //const messageId = Math.max(...Object.keys(messages).map(elem => Number(elem))) + 1;
            const messageId = Number(Object.keys(messages)[Object.keys(messages).length - 1]) + 1; //правильный вариант
            this.setState({
                messages: { ...messages, [messageId]: {text: input, sender: 'me'} }, // если уже существует сообщение с таким id, обновляем его, в противном случае создаем
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
        const { messages, chats, input } = this.state;
        const { chatId } = this.props;

       //let lastIndex = Object.keys(messages).length-1;
       //const messageId = Math.max(...Object.keys(messages).map(elem => Number(elem))) + 1;

       const messageId = Number(Object.keys(messages)[Object.keys(messages).length - 1]) + 1;
       this.setState({
           messages: {...messages, [messageId]: {text: "I'm bot", sender: "bot"}},
           chats: {...chats, [chatId]: {...chats[chatId], messageList: [...chats[chatId]['messageList'], messageId]}}
        });
    };

    componentDidUpdate(prevProps, prevState) {
        /* console.log('componentDidUpdate');
        console.log('prevState:', prevState, 'prevProps:', prevProps);
        console.log('thisState:', this.state, 'thisProps:', this.props); */

        const {messages, chats} = this.state;
        const {chatId} = this.props.chatId;

        if ((Object.keys(prevState['messages']).length < Object.keys(this.state['messages']).length)
                &&  (messages[Object.keys(messages)[Object.keys(messages).length-1]].sender === "me")) {
            setTimeout(this.sendAnswer, 500);
        }
    }

    render() {
        const {messages, chats} = this.state;
        const {chatId} = this.props;

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