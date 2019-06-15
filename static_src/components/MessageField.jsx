import React from 'react';
import Message from './Message'
import { TextField , FloatingActionButton } from 'material-ui';
import IconSend from 'material-ui/svg-icons/content/send';
import Chip from 'material-ui/Chip';

const styles = {
    messageElements: {
        //position: 'relative',
        display: 'flex',
        flexDirection: 'column'
    },
    chipSenderMe: {
      margin: 4,
      alignSelf: 'end',
      justifyСontent: 'start',
      //textAlign: 'right',
      //justifyСontent: "flex-end",
      //position: 'absolute',
      //right: 0,
    },
    chipSenderOther: {
        margin: 4,
        //alignSelf: 'start',
        justifyСontent: 'end',
        //textAlign: 'left',
        //justifyСontent: "flex-start",
        //position: 'absolute',
        //left: 0,
      }};

export default class MessageField extends React.Component {
 
    state = {
        messages: [
            {text: "Hello", sender: "me"}, 
            {text: "How are you?", sender: "me"}
        ],
        input: ''
    }

    /**
     * Событие набора 1 буквы в поле ввода
     */
    handleType = (event) => {
        //this.setState({input: event.target.value});
        //[e.target.name] - имя поля ввода. для возможности обрабатывать этой ф-й любой инпут
        this.setState({[event.target.name]: event.target.value});
    }

    /**
     * Событие нажатия кнопки отправки сообщения
     */
    handleSendMessage = () => {
        this.setState({messages: [...this.state.messages, {text: this.state.input, sender: 'me'}]});
        this.clear();
    };

    /**
     * Событие нажатия Enter при активном поле ввода
     */
    handleKeyUp = (event) => {
        console.log(event.keyCode);
        if (event.keyCode === 13) {
            this.handleSendMessage();
        }
    };

    clear = () => {
        this.setState({input: ''});
    }

    /**
     * Отправка ответа бота
     */
    sendAnswer = () => {
        this.setState({messages: [...this.state.messages, {text: "I'm bot", sender: "bot"}]});
    };

    componentDidUpdate(prevProps, prevState) {
        console.log("before componentDidUpdate");
        if ((prevState.messages.length < this.state.messages.length)
                &&  (this.state.messages[this.state.messages.length-1].sender === "me")) {
            setTimeout(this.sendAnswer, 500);
        }
        //console.log("componentDidUpdate");
        //console.log('prevState:', prevState, 'prevProps:', prevProps);
        //console.log('thisState:', this.state, 'thisProps:', this.props);
    }

    render() {

        const messageElements = this.state.messages.map((elem, index) => (

        <Chip
          style={elem.sender==='me' ?  styles.chipSenderMe : styles.chipSenderOther} 
          key = {index}
        >
          <Message key = {index} text = {elem.text} sender = {elem.sender} />
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