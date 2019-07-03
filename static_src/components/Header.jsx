import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Avatar from 'material-ui/Avatar';


const styles = {
    header: {
        height: "40px",
        backgroundColor: "#ffccdd",
        display: 'flex',
        justifyContent: 'space-between',
    },
    headerText: {
        textAlign: "center"
    }
}

export default class Header extends React.Component {
    render() {
        return  <div className="header" style={styles.header}> 
            <p style={styles.headerText}>Чат</p>
            <Link  to={"/static_src/profile/"}><Avatar src={'/static_src/images/uV55pjsuSWg.jpg'}/></Link>
        </div> 
    }
}