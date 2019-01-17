import React, { Component } from "react";
import Header from "./Header";
import PropTypes from "prop-types";
import Selector from "./Selector.js";
import Footer from "../components/Footer";
import CardView from "./CardView";

class CardGenerator extends Component {
  render() {
    return (
      <div class="page">
        <div class="box-logo-builder">
          <Header container="builder-logo" imgClass="img-logo-builder" />
        </div>
        <section class="build-container">
          <CardView dataCard={this.props.dataCard}/>
          <Selector dataCard={this.props.dataCard} backSkills={this.props.backSkills} changePalette={this.props.changePalette} changeTypography={this.props.changeTypography} changeName={this.props.changeName} changeJob={this.props.changeJob} changeEmail={this.props.changeEmail} changePhone={this.props.changePhone}/>
        </section>
        <Footer />
      </div>
    );
  }
}

export default CardGenerator;
