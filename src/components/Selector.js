import React, { Component } from "react";
import BoxDesign from "./BoxDesign";
import BoxFill from "./BoxFill";
import BoxShare from "./BoxShare";

class Selector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: "1"
    }
    this.handleCollapsable = this.handleCollapsable.bind(this);
    this.hideBox = this.hideBox.bind(this);
  }

  handleCollapsable(event) {
    if(this.state.index === event.currentTarget.attributes.index.value){
      this.setState({ index: "0" })
    } else {this.setState({ index: event.currentTarget.attributes.index.value })}    
  };

  hideBox(index) {
    let hideBox = "";
    const openIndex = this.state.index;
    if (index !== openIndex) {
      hideBox = "hide-box"
    }
    return hideBox;
  }


  render() {
    return (
      <div className="selectors-container">

        <BoxDesign dataCard={this.props.dataCard} index="1" handleCollapsable={this.handleCollapsable} hideBox={this.hideBox} />

        <BoxFill dataCard={this.props.dataCard} backSkills={this.props.backSkills} index="2" handleCollapsable={this.handleCollapsable} hideBox={this.hideBox} />

        <BoxShare dataCard={this.props.dataCard} index="3" handleCollapsable={this.handleCollapsable} hideBox={this.hideBox}/>
      </div>
    );
  }
}

export default Selector;
