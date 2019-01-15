import React, { Component } from 'react';
import CardViewHeader from './CardViewHeader';
import CardViewImg from './CardViewImg';
import CardViewSocial from './CardViewSocial';
import CardViewFooter from './CardViewFooter';
import Reset from './Reset';


class CardView extends Component {
    render() { 
        return ( 
        <div class="build-card">
        <Reset dataCard={this.props.dataCard}/>
        <div class="box-card">
            <CardViewHeader dataCard={this.props.dataCard}/>
            <CardViewImg dataCard={this.props.dataCard}/>
            <CardViewSocial dataCard={this.props.dataCard}/>
            <CardViewFooter dataCard={this.props.dataCard}/>
        </div>
    </div>);
    }
}

export default CardView;
