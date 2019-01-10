import React, { Component } from "react";
import BoxDesign from "./BoxDesign";
import BoxFill from "./BoxFill";
import BoxShare from "./BoxShare";

class Selector extends Component {
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
