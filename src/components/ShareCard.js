import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ShareCard.scss";

class ShareCard extends Component {
    
    render() {
    return (
    <div className= 'card-msg'>
            <p className="msg-text">La tarjeta ha sido creada:</p>
            <p className="share-link" href={this.props.URL}>
            <span className="link">
                <a rel="noopener noreferrer" target="_blank" href={this.props.URL}>
                {this.props.URL}
                </a>
            </span>
            </p>
            <button className="btn-twitter">
            {" "}
            <i className="fab fa-twitter" />
            <a
            className="twitter-link"
            rel="noopener noreferrer"
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=¡Mira%20qué%20tarjeta%20más%20chula%20he%20creado%20con%20Awesome%20profile-cards!%20${
                this.props.URL
                }`}
            >
                Compartir en twitter
            </a>
            </button>
        </div>
    );
}
}

ShareCard.propTypes = {
    URL: PropTypes.string.isRequired
  }

export default ShareCard;
