import React, { Component } from "react";
import logoAdalab from "../../images/logo-adalab.png";
import "./Footer.scss";

class Footer extends Component {
    render() {
        return (
            <footer className="page__footer">
                <div className="container-footer">

                    <p className="copyright">Awesome profile-cards @2018</p>
                    <a href="https://adalab.es/" rel="noopener noreferrer"
                        target="_blank">
                        <img className="img-footer" src={logoAdalab} alt="Logo Adalab" /></a>
                </div>
            </footer>
        )
    }
}


export default Footer;