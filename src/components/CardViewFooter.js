import React, { Component } from 'react';

class CardViewFooter extends Component {

    render() { 
        return ( 
            <div className={this.props.cardFooterContainer}>
            <div className={this.props.cardFooterSkillsBox}>
                <ul className={this.props.cardFooterSkillsList}></ul>
            </div>
            </div>
        );
    }
}

export default CardViewFooter;