import React from 'react';
import PropTypes from 'prop-types';

import ChatList from './ChatList';
import Header from './Header';
import MessageField from './MessageField';

const styles = {
    window: {
        display: "flex"
    },
    rightColumn: {
        width: '400px',
    }
};

export default class Layout extends React.Component {
    
    static propTypes = {
        idChat: PropTypes.number,    
    };

    static defaultProps = {
        idChat: 1,
    };


    render() {
        return  <div>
            <Header className='styles.header'/>
        <div className="window" style={styles.window}> 
        <ChatList />
            
            <div className='styles.rightColumn' style={styles.rightColumn}>
                
            <MessageField chatId={ this.props.chatId }/>
            </div>
        </div> 
        </div>

    }
}