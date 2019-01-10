import React, { Component } from 'react';
import CardViewHeader from './CardViewHeader';
import CardViewImg from './CardViewImg';
import CardViewSocial from './CardViewSocial';
import CardViewFooter from './CardViewFooter';


class CardView extends Component {
    render() { 
        return ( <div class="box-card">
        <CardViewHeader cardHeaderContainer="card-header" cardHeaderName="name-person" cardHeaderJob="work-space"/>
        <CardViewImg cardImg="card-img" cardRandom="random"/>
        <CardViewSocial />
        <CardViewFooter cardFooterContainer="card-footer" cardFooterSkillsBox="skills"
        cardFooterSkillsList="skills__list"/>
        
    </div> );
    }
}

export default CardView;
