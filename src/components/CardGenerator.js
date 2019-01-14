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
          <Selector dataCard={this.props.dataCard} />
        </section>
        <Footer />
      </div>
    );
  }
}

export default CardGenerator;
