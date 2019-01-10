//TODO: https://github.com/Adalab/Pintador-de-caritas

import React, { Component } from "react";

class CardViewSocial extends Component {
  render() {
    return (
      <div class="icons-box">
        <ul class="list-icon-card">
          <li class="icons-contein icon-movil">
            {" "}
            <a href="/" class="icons-card">
              <i class="fas fa-mobile-alt" />
            </a>
          </li>
          <li class="icons-contein icon-mail">
            {" "}
            <a href="/" class="icons-card">
              <i class="far fa-envelope" />
            </a>
          </li>
          <li class="icons-contein icon-linkedin">
            {" "}
            <a href="/" class="icons-card" target="_blank">
              <i class="fab fa-linkedin-in" />
            </a>
          </li>
          <li class="icons-contein icon-github">
            {" "}
            <a href="/" class="icons-card" target="_blank">
              <i class="fab fa-github-alt" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CardViewSocial;
