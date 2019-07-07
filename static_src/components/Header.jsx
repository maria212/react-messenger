import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
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
class Header extends React.Component {
    static PropTypes = {
        chatId: PropTypes.number,
        messageCounter: PropTypes.number.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return  <div className="header" style={styles.header}> 
            <p style={styles.headerText}>Чат { this.props.chatId }. Сообщений { this.props.messageCounter }</p> 
            <Link  to={"/static_src/profile/"}><Avatar src={'/static_src/images/uV55pjsuSWg.jpg'}/></Link>
        </div> 
    }
}

const mapStateToProps = ({ messageReducer }) => ({
    //тут не обязательно прокидывать только переменные. можно "кодить"
    messageCounter: Object.keys(messageReducer.messages).length, // TODO считать сообщения в рамках одного чата
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch); //все action прокидывать в эту функцию
 
 //декорируем, обертка. connect прокидывает в props 
 export default connect(mapStateToProps, mapDispatchToProps)(Header);