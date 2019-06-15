import React from 'react';


const styles = {
    header: {
        height: "20px",
        backgroundColor: "#ffccdd"
    },
    headerText: {
        textAlign: "center"
    }
    

}

export default class Header extends React.Component {

    render() {
        return  <div className="header" style={styles.header}> 
            <p style={styles.headerText}>Чат</p>
        </div> 

    }
}