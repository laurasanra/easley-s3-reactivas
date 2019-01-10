import React, { Component } from 'react';
import Header from "./Header"
import PropTypes from "prop-types";
import Selector from "./Selector.js";

class CardGenerator extends Component {
    render() {
        return (

            <div class="page">
                <div class="box-logo-builder">
                    <Header container="builder-logo" imgClass="img-logo-builder" />
                </div>
                <section class="build-container">
                    <div class="build-card">
                        <div class="reset-box"> <a href="#" class="reset-link">
                            <div class="reset-btn"><i class="far fa-trash-alt"></i> reset</div>
                        </a>

                        </div>
                        <div class="box-card">
                            <div class="card-header">
                                <h1 class="name-person">Nombre Apellido</h1>

                                <h3 class="work-space">Front-end developer</h3>

                            </div>
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
                    </div>

                    <Selector />

                </section>

                <footer class="page__footer">
                    <div class="container-footer">
                        <div class="container-footer-logo">
                            <p class="copyright">Awesome profile-cards @2018</p>
                            <img class="img-footer-logo" src="assets/images/logosmall.png"
                                alt="Logo Las Pegatinas" />
                        </div>
                        <img class="img-footer" src="assets/images/logo-adalab.png" alt="Logo Adalab" />
                    </div>
                </footer>
            </div>

        );
    }
}



export default CardGenerator;