import React, { Component } from "react";
import BoxDesign from "./BoxDesign";
import BoxFill from "./BoxFill";
import BoxShare from "./BoxShare";

class Selector extends Component {
  
  render() {
    return (
      <div className="selectors-container">

        <BoxDesign dataCard = {this.props.dataCard} changePalette={this.props.changePalette} changeTypography={this.props.changeTypography}/>

        <BoxFill dataCard = {this.props.dataCard} backSkills={this.props.backSkills} changeName={this.props.changeName} changeJob={this.props.changeJob} changeEmail={this.props.changeEmail} changePhone={this.props.changePhone} />

        <BoxShare  dataCard = {this.props.dataCard}/>
      </div>
    );
  }
}

export default Selector;
