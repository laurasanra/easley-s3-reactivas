import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Reset.scss";

class Reset extends Component {
  constructor(props) {
    super(props);

    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(event) {
    event.preventDefault();
    localStorage.removeItem('storageData');
    this.props.resetInfo();
  }

  render() {

    return (
      <div className="reset-box">
        <a href="/" onClick={this.handleReset}>
          <div className="reset-btn">
            <i className="far fa-trash-alt" /> reset
          </div>
        </a>
      </div>
    );
  }
}

Reset.propTypes = {
  resetInfo: PropTypes.func.isRequired
}

export default Reset;
