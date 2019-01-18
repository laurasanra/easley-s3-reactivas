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
    this.handleCollapsable = this.handleCollapsable.bind(this);
  }

  handleCollapsable(event){
    console.log("hello");

  };
  
  render() {
    return (
      <div className="selectors-container">

        <BoxDesign dataCard = {this.props.dataCard} collapsableIndex ={this.state.index} handleCollapsable={this.handleCollapsable}/>

        <BoxFill dataCard = {this.props.dataCard} backSkills={this.props.backSkills} collapsableIndex ={this.state.index} />

        <BoxShare  dataCard = {this.props.dataCard} collapsableIndex ={this.state.index}/>
      </div>
    );
  }
}

export default Selector;
