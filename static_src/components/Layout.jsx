import React from 'react';
import PropTypes from 'prop-types';

import ChatList from './ChatList';
import Header from './Header';
import MessageField from './MessageField';


const styles = {
    window: {
        display: "flex"
    },
}

export default class Layout extends React.Component {
    
    static PropTypes = {
        idChat: PropTypes.number,    
    }



    render() {
        return  <div className="window" style={styles.window}> 
            <ChatList />
            <div className='right-column'>
                <Header />
            <MessageField />
            </div>
        </div> 

    }
}