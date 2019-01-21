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
             selectedColor = "";
        }else if(incomingColor === "2"){
         selectedColor = "color-red";
        }else if(incomingColor === "3"){
            selectedColor = "color-grey";
           }else if(incomingColor === "4"){
            selectedColor = "color-gum";
           }else if(incomingColor === "5"){
            selectedColor = "color-purple";
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
