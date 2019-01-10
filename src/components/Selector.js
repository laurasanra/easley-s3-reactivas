import React, { Component } from "react";
import BoxDesign from "./BoxDesign";
import BoxFill from "./BoxFill";
import BoxShare from "./BoxShare";

class Selector extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div class="selectors-container">
        <BoxDesign />

        <BoxFill />

        <BoxShare />
      </div>
    );
  }
}

export default Selector;
