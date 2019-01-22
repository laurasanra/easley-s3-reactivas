import React, { Component } from "react";

class Reset extends Component {
  constructor(props){
    super(props);
      
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(){
    localStorage.removeItem('storageData');
  }
  
  render() {
     return (
      <div className="reset-box">
        <a href="/" className="reset-link" onClick={this.handleReset}>
          <div className="reset-btn">
            <i className="far fa-trash-alt" /> reset
          </div>
        </a>
      </div>
    );
  }
}

export default Reset;
