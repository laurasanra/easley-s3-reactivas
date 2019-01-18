import React, { Component } from "react";
import BoxDesign from "./BoxDesign";
import BoxFill from "./BoxFill";
import BoxShare from "./BoxShare";

class Selector extends Component {

  constructor(props){
    super(props);
    this.state = {
      index: "1"
    }

  }
  
  render() {
    return (
      <div className="selectors-container">

        <BoxDesign dataCard = {this.props.dataCard} />

        <BoxFill dataCard = {this.props.dataCard} backSkills={this.props.backSkills} />

        <BoxShare  dataCard = {this.props.dataCard}/>
      </div>
    );
  }
}

export default Selector;
