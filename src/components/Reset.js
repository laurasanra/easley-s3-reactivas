import React, { Component } from "react";

class Reset extends Component {
  constructor(props){
    super(props);
  
    this.handleReset = this.handleReset.bind(this);
  }


  handleReset(event){
    console.log("helou");
    event.preventDefault();

  }

  render() {
    return (
      <div class="reset-box">
        <a href="/" class="reset-link" onClick={this.handleReset}>
          <div class="reset-btn">
            <i class="far fa-trash-alt" /> reset
          </div>
        </a>
      </div>
    );
  }
}

export default Reset;
