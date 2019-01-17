import React, { Component } from 'react';
import CardViewHeader from './CardViewHeader';
import CardViewImg from './CardViewImg';
import CardViewSocial from './CardViewSocial';
import CardViewFooter from './CardViewFooter';
import Reset from './Reset';


class CardView extends Component {

    changePalette(){
        const incomingColor = this.props.dataCard.pallete;
        let selectedColor ="";
        if(incomingColor === "1"){
             selectedColor = " color-red";
        }else {
         selectedColor = "color-grey";
        }
        return selectedColor;
    }

    render() {

        return ( 
        <div class="build-card">
            <Reset dataCard={this.props.dataCard}/>
            <div className={`box-card ${this.changePalette()}`}>
                <CardViewHeader dataCard={this.props.dataCard}/>
                <CardViewImg dataCard={this.props.dataCard}/>
                <CardViewSocial dataCard={this.props.dataCard}/>
                <CardViewFooter dataCard={this.props.dataCard}/>
            </div>
        </div>);
    }
}

export default CardView;
