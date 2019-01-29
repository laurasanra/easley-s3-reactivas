import React, { Component } from "react";
import Header from "./Header";
import PropTypes from "prop-types";
import Selector from "./Selector.js";
import Footer from "../components/Footer";
import CardView from "./CardView";
import "./CardGenerator.scss";

class CardGenerator extends Component {
  render() {
    return (
      <div className="page">
        <div className="box-logo-builder">
          <Header logo="builder-logo" imgClass="img-logo-builder" />
        </div>
        <section className="build-container">
          <CardView 
          dataCard={this.props.dataCard} 
          resetInfo={this.props.resetInfo} />
          <Selector dataCard={this.props.dataCard}
            backSkills={this.props.backSkills}
            changePalette={this.props.changePalette}
            changeTypography={this.props.changeTypography}
            changeName={this.props.changeName}
            changeJob={this.props.changeJob}
            changeEmail={this.props.changeEmail}
            changePhone={this.props.changePhone}
            changeLinkedin={this.props.changeLinkedin}
            changeGithub={this.props.changeGithub}
            changeImage={this.props.changeImage}
            changeSkills={this.props.changeSkills}
            sendRequest={this.props.sendRequest}
            URL={this.props.URL} />
        </section>
        <Footer />
      </div>
    );
  }
}

CardGenerator.propTypes = {
  dataCard: PropTypes.object.isRequired,
  backSkills: PropTypes.array.isRequired,
  changePalette: PropTypes.func.isRequired,
  changeTypography: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  changeJob: PropTypes.func.isRequired,
  changeImage: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePhone: PropTypes.func.isRequired,
  changeLinkedin: PropTypes.func.isRequired,
  changeGithub: PropTypes.func.isRequired,
  changeSkills: PropTypes.func.isRequired,
  sendRequest: PropTypes.func.isRequired,
  URL: PropTypes.string.isRequired,
  resetInfo: PropTypes.func.isRequired

}

export default CardGenerator;
