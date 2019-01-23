import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import logoAwesome from "../images/awesome-card-logo.svg";


class Header extends Component {
    render(){
        return(
        <header className= {`page__header ${this.props.logo}`} >
                <div className={this.props.container}>
                    <Link className="linkBtn" to="/">
                    <img className={this.props.imgClass} src={logoAwesome} alt="Awesome Cards Logo" />
                    </Link>
                </div>
            </header>
        )
    }
}

Header.propTypes={
    container: PropTypes.string.isRequired,
    imgClass: PropTypes.string.isRequired,
}

export default Header;
