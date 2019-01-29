import React, { Component } from "react";
import BoxDesign from "../BoxDesign/BoxDesign";
import BoxFill from "../BoxFill/BoxFill";
import BoxShare from "../BoxShare/BoxShare";
import PropTypes from "prop-types";
import "./Selector.scss";

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "1"
    };
    this.handleCollapsable = this.handleCollapsable.bind(this);
    this.hideBox = this.hideBox.bind(this);
  }

  handleCollapsable(event) {
    const { value } = event.currentTarget.attributes.index;
    this.state.index === value
      ? this.setState({ index: "0" })
      : this.setState({ index: value });
  }

  hideBox(index) {
    let hideBox = "";
    const openIndex = this.state.index;
    index !== openIndex ? (hideBox = "hide-box") : (hideBox = "");
    return hideBox;
  }

  render() {
    return (
      <div className="selectors-container">
        <BoxDesign
          dataCard={this.props.dataCard}
          changePalette={this.props.changePalette}
          changeTypography={this.props.changeTypography}
          index="1"
          handleCollapsable={this.handleCollapsable}
          hideBox={this.hideBox}
        />

        <BoxFill
          dataCard={this.props.dataCard}
          backSkills={this.props.backSkills}
          changeName={this.props.changeName}
          changeJob={this.props.changeJob}
          changeEmail={this.props.changeEmail}
          changePhone={this.props.changePhone}
          changeLinkedin={this.props.changeLinkedin}
          changeGithub={this.props.changeGithub}
          index="2"
          handleCollapsable={this.handleCollapsable}
          hideBox={this.hideBox}
          changeImage={this.props.changeImage}
          changeSkills={this.props.changeSkills}
        />

        <BoxShare
          URL={this.props.URL}
          sendRequest={this.props.sendRequest}
          dataCard={this.props.dataCard}
          index="3"
          handleCollapsable={this.handleCollapsable}
          hideBox={this.hideBox}
        />
      </div>
    );
  }
}

Selector.propTypes = {
  dataCard: PropTypes.object.isRequired,
  backSkills: PropTypes.array.isRequired,
  changePalette: PropTypes.func.isRequired,
  changeTypography: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  changeJob: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePhone: PropTypes.func.isRequired,
  changeLinkedin: PropTypes.func.isRequired,
  changeGithub: PropTypes.func.isRequired,
  changeImage: PropTypes.func.isRequired,
  changeSkills: PropTypes.func.isRequired,
  sendRequest: PropTypes.func.isRequired,
  URL: PropTypes.string.isRequired
};

export default Selector;
