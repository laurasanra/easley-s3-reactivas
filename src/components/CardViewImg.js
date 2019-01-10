import React, { Component } from 'react';

class CardViewImg extends Component {

    render() { 
        return (
        <div className={this.props.cardImg} id={this.props.cardRandom}></div> 
        );
    }
}

export default CardViewImg;