import React, { Component } from "react";
import Header from "./Header";
import PropTypes from "prop-types";
import Selector from "./Selector.js";
import Footer from "../components/Footer";
import CardView from "./CardView";

class CardGenerator extends Component {
  render() {
    return (
      <div className="page">
        <div className="box-logo-builder">
          <Header container="builder-logo" imgClass="img-logo-builder" />
        </div>
        <section className="build-container">
          <CardView dataCard={this.props.dataCard}/>
          <Selector dataCard={this.props.dataCard} backSkills={this.props.backSkills} changePalette={this.props.changePalette} changeTypography={this.props.changeTypography} changeName={this.props.changeName} changeJob={this.props.changeJob} changeEmail={this.props.changeEmail} changePhone={this.props.changePhone} changeLinkedin={this.props.changeLinkedin} changeGithub={this.props.changeGithub}/>
        </section>
        <Footer />
      </div>
    );
  }
}

export default CardGenerator;
