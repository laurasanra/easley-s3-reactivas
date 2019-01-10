import React, { Component } from "react";
import TittleBox from "./TittleBox";

class BoxShare extends Component {
  render() {
    return (
      <div>
        <div class="box-selector edit-share">
          <TittleBox icon="fas fa-share-alt icons-edit" tittle="Comparte" />

          <div class="card-share flex-container">
            <div class="box-btn-share">
              <button class="btn-share" type="submit">
                {" "}
                <i class="far fa-id-card" />
                <span class="title-edit"> Crear tarjeta </span>
              </button>
            </div>
          </div>
        </div>

        <div class="edit-share card-created hide-box bring-box">
          <div class="card-msg">
            <p class="msg-text">La tarjeta ha sido creada:</p>

            <p class="share-link" href="#">
              <span class="link" />
            </p>
            <button class="btn-twitter">
              {" "}
              <i class="fab fa-twitter" />
              <a class="twitter-link" target="_blank" href="">
                Compartir en twitter
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxShare;
