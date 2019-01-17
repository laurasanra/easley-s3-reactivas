import React, { Component } from "react";
import CardGenerator from "./CardGenerator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCard: {
        pallete: "1",
        typography: "2",
        name: "",
        job: "",
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
    this.changeTypography = this.changeTypography.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeJob = this.changeJob.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
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

    this.setState(prevState => ({
      dataCard: {
        ...prevState.dataCard,
        pallete: valuePalette
      }
    }));
  }

  changeTypography(e) {
    const valuetypography = e.target.value;
    console.log(valuetypography)

    this.setState(prevState => ({
      dataCard: {
        ...prevState.dataCard,
        typography: valuetypography
      }
    }));
  }


  changeName(e) {
    const valuename = e.target.value;
    console.log(valuename)

    this.setState(prevState => ({
      dataCard: {
        ...prevState.dataCard,
        name: valuename
      }
    }));
  }

  changeJob(e) {
    const valuejob = e.target.value;
    console.log(valuejob)

    this.setState(prevState => ({
      dataCard: {
        ...prevState.dataCard,
        job: valuejob
      }
    }));
  }

  changeEmail(e) {
    const valueemail = e.target.value;
    console.log(valueemail)

    this.setState(prevState => ({
      dataCard: {
        ...prevState.dataCard,
        email: valueemail
      }
    }));
  }

  changePhone(e) {
    const valuephone = e.target.value;
    console.log(valuephone)

    this.setState(prevState => ({
      dataCard: {
        ...prevState.dataCard,
        phone: valuephone
      }
    }));
  }

  render() {
    console.log(this.state)
    const changePalette = this.changePallete;
    const changeTypography = this.changeTypography;
    const changeName = this.changeName;
    const changeJob = this.changeJob;
    const changeEmail = this.changeEmail;
    const changePhone = this.changePhone;
    return (
      <CardGenerator
        dataCard={this.state.dataCard}
        backSkills={this.state.backSkills}
        changePalette={changePalette}
        changeTypography={changeTypography}
        changeName={changeName}
        changeJob={changeJob}
        changeEmail={changeEmail}
        changePhone={changePhone}
      />
    );
  }
}

export default App;
