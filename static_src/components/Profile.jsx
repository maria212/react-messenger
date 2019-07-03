import React from 'react';
import Avatar from 'material-ui/Avatar';

export default class Profile extends React.Component {
    render() {
        return  (<div className="header" style={styles.header}> 
             <Avatar src={'/static_src/images/uV55pjsuSWg.jpg'}/>
        </div> )
    }
}