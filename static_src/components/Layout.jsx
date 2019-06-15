import React from 'react';

import ChatList from './ChatList';
import Header from './Header';
import MessageField from './MessageField';

const styles = {
    window: {
        display: "flex"
    },
}

export default class Layout extends React.Component {

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