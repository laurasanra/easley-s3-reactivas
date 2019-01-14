import React, { Component } from "react";

class Reset extends Component {
  render() {
    return (
      <div class="reset-box">
        {" "}
        <a href="#" class="reset-link">
          <div class="reset-btn">
            <i class="far fa-trash-alt" /> reset
          </div>
        </a>
      </div>
    );
  }
}

export default Reset;
