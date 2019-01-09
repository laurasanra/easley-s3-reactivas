import React, {Component} from "react";
import PropTypes from "prop-types";
import logoAwesome from "../images/awesome-card-logo.svg";


class Header extends Component {
    render(){
        return(
            <header className="page__header">
                <div className={this.props.container}>
                    <img className={this.props.imgClass} src={logoAwesome} alt="Awesome Cards Logo" />
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
