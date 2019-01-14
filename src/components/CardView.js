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
            <div class="card-img" id="random"></div>
            <div class="icons-box">
                <ul class="list-icon-card">
                    <li class="icons-contein icon-movil"> <a href="" class="icons-card"><i class="fas fa-mobile-alt"></i></a>

                    </li>
                    <li class="icons-contein icon-mail"> <a href="#" class="icons-card"><i class="far fa-envelope"></i></a>

                    </li>
                    <li class="icons-contein icon-linkedin"> <a href="#" class="icons-card" target="_blank"><i class="fab fa-linkedin-in"></i></a>

                    </li>
                    <li class="icons-contein icon-github"> <a href="#" class="icons-card" target="_blank"><i class="fab fa-github-alt"></i></a>

                    </li>
                </ul>
            </div>
            <div class="card-footer">
                <div class="skills">
                    <ul class="skills__list"></ul>
                </div>
            </div>
        </div>
    </div>);
    }
}

export default CardView;
