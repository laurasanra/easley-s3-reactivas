import React, { Component } from "react";
import CardGenerator from "./CardGenerator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCard: {
        pallete: "1",
        typography: "",
        name: "sdhfjasgdfa",
        job: "Front-end developer",
        photo: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        skills: ["", "Laura", "queens", "nasi"],
        success: "",
        cardURL: "",
        error: ""
      },
      backSkills: [""]
    };
    this.getBackSkills();
    this.changePallete = this.changePallete.bind(this);
  }

  getBackSkills() {
    fetch(
      "https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json"
    )
      .then(response => response.json())
      .then(data => this.setState({ backSkills: data.skills }));
  }

  changePallete(e) {
    const valuePalette = e.target.value;
    console.log(valuePalette)

    this.setState(prevState => ({
      dataCard: {
        ...prevState.dataCard,
        pallete: valuePalette
      }
    }));
  }

  render() {
    console.log(this.state)
    const changePalette = this.changePallete;
    return (
      <CardGenerator
        dataCard={this.state.dataCard}
        backSkills={this.state.backSkills}
        changePalette={changePalette}
      />
    );
  }
}

export default App;
