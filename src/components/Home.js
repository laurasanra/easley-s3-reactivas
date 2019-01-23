import React, { Fragment, Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


class Home extends Component {

    render() {
        return (
            <Fragment>
            <Header />
            <main className="page__main">
                <div className="container-text">
                    <h1 className="main-title">Crea tu tarjeta de visita</h1>
                    <p className="mainp">Crea mejores contactos profesionales de forma rápida y cómoda</p>
                </div>
                <ul className="list">
                    <li className="list__element"><i className="far fa-object-ungroup icon-design"></i></li>
                    <li className="list__element"><i className="far fa-keyboard icon-fill"></i></li>
                    <li className="list__element"><i className="fas fa-share-alt icon-share"></i></li>
                    <li className="list__element element-text">Diseña</li>
                    <li className="list__element element-text">Rellena</li>
                    <li className="list__element element-text">Comparte</li>
                </ul>
                <Link className="linkBtn" to='/cardgenerator'>
                    <button className="btn-start">Comenzar</button>
                </Link>
            </main>
            <Footer />
            </Fragment>

        );}
}

export default Home;