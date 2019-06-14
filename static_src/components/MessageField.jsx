import React from 'react';
import Message from './Message'

export default class MessageField extends React.Component {
    state = {
        messages: [
            {text: "Hello", sender: "me"}, 
            {text: "How are you?", sender: "me"}
        ],
        newMessage: {text: "I'm send message ;=)", sender: "me"}
    }

    handleClick = () => {
        this.setState({messages: [...this.state.messages, {text: this.state.newMessage.text, sender: this.state.newMessage.sender}]});
        console.log('after handleClick');
    };

    handleChangeMessage = (event) => {
    }

    sendAnswer = () => {
        this.setState({messages: [...this.state.messages, {text: "I'm bot", sender: "bot"}]});
    };

    componentDidUpdate(prevProps, prevState) {
        console.log("before componentDidUpdate");
        if ((prevState.messages.length < this.state.messages.length)
            //&&  (prevState.messages.sender === "me")) {
                &&  (this.state.messages[this.state.messages.length-1].sender === "me")) {
            this.sendAnswer();
        }
        console.log("componentDidUpdate");
        console.log('prevState:', prevState, 'prevProps:', prevProps);
        console.log('thisState:', this.state, 'thisProps:', this.props);
    }

    render() {
        if( this.state.messages === undefined) console.log("this.state.messages === undefined");
        

        const messageElements = this.state.messages.map((elem, index) => (
            <Message key = {index} text = {elem.text} sender = {elem.sender} />
            
        ));

        return  <div> 
        {messageElements} 
        <button onClick= { this.handleClick } >Send message</button> 
     {/*        <input type="text" value= { this.state.newMessage } onChange={this.handleChangeMessage}/> 
            <input type="text" value= { this.state.newMessage } /> 
            <button onClick= { this.handleClick } >Send message</button>  
             <input type="submit" value="Отправить" /> */}
            </div> 

    }
}