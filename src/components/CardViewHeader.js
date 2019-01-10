import React, { Component } from 'react';

class CardViewHeader extends Component {
    render() { 
        return (
        <div className={this.props.cardHeaderContainer}>
        <h1 className={this.propscardHeaderName}>Nombre Apellido</h1>
        <h3 className={this.props.cardHeaderJob}>Front-end developer</h3>
    </div>  );
    }
}

export default CardViewHeader;
