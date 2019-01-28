import React, { Component } from "react";
import PropTypes from "prop-types";

class CardViewSocial extends Component {
  render() {
    return (
      <div className="icons-box">
        <ul className="list-icon-card">
          <li className="icons-contein icon-movil">
            {" "}
            <a href={`tel: +34${this.props.dataCard.phone}`} className="icons-card">
              <i className="fas fa-mobile-alt" />
            </a>
          </li>
          <li className="icons-contein icon-mail">
            {" "}
            <a href={`mailto: ${this.props.dataCard.email}`} className="icons-card">
              <i className="far fa-envelope" />
            </a>
          </li>
          <li className="icons-contein icon-linkedin">
            {" "}
            <a href={`https://www.linkedin.com/in/${this.props.dataCard.linkedin}`} className="icons-card" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li className="icons-contein icon-github">
            {" "}
            <a href={`https://github.com/${this.props.dataCard.github}`}className="icons-card" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-github-alt" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

CardViewSocial.propTypes = {
  dataCard: PropTypes.object.isRequired
}

export default CardViewSocial;
