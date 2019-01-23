import React, { Component } from "react";
import TittleBox from "./TittleBox";

class BoxShare extends Component {

  showShare(){
    if(this.props.URL===""){
      return "hide-box"
    }else{return}
  }

  render() {
    const {index, handleCollapsable, hideBox} = this.props;
    return (
      <div>
        <div className="box-selector edit-share">
          <TittleBox icon="fas fa-share-alt icons-edit" tittle="Comparte" handleCollapsable = {handleCollapsable} index = {index}/>

          <div className= {`card-share flex-container ${hideBox(index)}`}>
            <div className="box-btn-share">
              <button className="btn-share" type="submit" onClick={this.props.sendRequest}>
                {" "}
                <i className="far fa-id-card" />
                <span className="title-edit"> Crear tarjeta </span>
              </button>
            </div>
          </div>
        </div>

        <div className={`edit-share card-created ${this.showShare()} bring-box`}>
          <div className="card-msg">
            <p className="msg-text">La tarjeta ha sido creada:</p>

            <p className="share-link" href={this.props.URL}>
              <span className="link" />
            </p>
            <button className="btn-twitter">
              {" "}
              <i className="fab fa-twitter" />
              <a className="twitter-link" target="_blank" href={`https://twitter.com/intent/tweet?text=¡Mira%20qué%20tarjeta%20más%20chula%20he%20creado%20con%20Awesome%20profile-cards!%20${this.props.URL}`}>
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
