import React, { Component } from "react";
import TittleBox from "./TittleBox";
import PropTypes from "prop-types";
import ShareCard from "./ShareCard";

class BoxShare extends Component {

  showShare() {
    if (this.props.URL === "") {
      return "hide-box"
    } else { return "" }
  }

  render() {
    const { index, handleCollapsable, hideBox, sendRequest } = this.props;
    const hideBoxResult = hideBox(index);
    return (
      <div>
        <div className="box-selector edit-share">
          <TittleBox
            icon="fas fa-share-alt icons-edit"
            tittle="Comparte"
            handleCollapsable={handleCollapsable}
            index={index}
            hideBoxResult={hideBoxResult} />

          <div className={`card-share flex-container ${hideBoxResult}`}>
            <div className="box-btn-share">
              <button className="btn-share" type="submit" onClick={sendRequest}>
                {" "}
                <i className="far fa-id-card" />
                <span className="title-edit"> Crear tarjeta </span>
              </button>
            </div>
            <div className={`edit-share card-created ${this.showShare()}`}>
          <ShareCard URL={this.props.URL} />

        </div>
          </div>
        </div>

        
      </div>
    );
  }
}

BoxShare.propTypes = {
  dataCard: PropTypes.object.isRequired,
  handleCollapsable: PropTypes.func.isRequired,
  hideBox: PropTypes.func.isRequired,
  URL: PropTypes.string.isRequired,
  sendRequest: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired
}

export default BoxShare;
