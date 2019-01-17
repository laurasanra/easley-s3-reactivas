import React, { Component } from "react";

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
            <a href={`https://www.linkedin.com/in/${this.props.dataCard.linkedin}`} className="icons-card" target="_blank">
              <i class="fab fa-linkedin-in" />
            </a>
          </li>
          <li class="icons-contein icon-github">
            {" "}
            <a href={`https://github.com/${this.props.dataCard.github}`}class="icons-card" target="_blank">
              <i class="fab fa-github-alt" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CardViewSocial;
