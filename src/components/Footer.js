import React, {Component} from "react";
import logoAdalab from "../images/logo-adalab.png";

class Footer extends Component {
    render(){
        return(
            <footer className="page__footer">
            <div className="container-footer">
                <div className="container-footer-logo">
                    <p className="copyright">Awesome profile-cards @2018</p>
                </div>
                <img className="img-footer" src={logoAdalab} alt="Logo Adalab" />
            </div>
        </footer>
        )
    }
}


export default Footer;