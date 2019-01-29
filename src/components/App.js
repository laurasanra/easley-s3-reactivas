import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import CardGenerator from "./CardGenerator";
import Home from "./Home";

const defaultData = {
  pallete: "1",
  typography: "2",
  name: "",
  job: "",
  photo: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  skills: [],
  success: "",
  cardURL: "",
  error: ""
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCard: this.getSavedData(),
      backSkills: [""],
      URL: "",
    };

    this.getBackSkills();
    this.changePallete = this.changePallete.bind(this);
    this.changeTypography = this.changeTypography.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeJob = this.changeJob.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeLinkedin = this.changeLinkedin.bind(this);
    this.changeGithub = this.changeGithub.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeSkills = this.changeSkills.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.resetInfo = this.resetInfo.bind(this);
  }

  resetInfo() {
    this.setState({ dataCard: this.getSavedData() })
  }

  getSavedData() {
    const storageData = localStorage.getItem("storageData");
    if (storageData !== null) {
      return JSON.parse(storageData);
    } else {
      return { ...defaultData };
    }
  }

  saveData(data) {
    localStorage.setItem("storageData", JSON.stringify(data));
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

    this.setState(prevState => {
      const updatedPalette = {
        ...prevState.dataCard,
        pallete: valuePalette
      };
      this.saveData(updatedPalette);
      return {
        dataCard: updatedPalette
      };
    });
  }

  changeTypography(e) {
    const valuetypography = e.target.value;

    this.setState(prevState => {
      const updatedTypo = {
        ...prevState.dataCard,
        typography: valuetypography
      };
      this.saveData(updatedTypo);
      return {
        dataCard: updatedTypo
      };
    });
  }

  changeSkills(e) {
    const selectSkillValue = e.target.value;
    const selectSkill = e.target;
    const { skills } = this.state.dataCard;

    if (selectSkill.checked && skills.length < 3) {
      this.setState(prevState => {
        const updateSkills = {
          ...prevState.dataCard,
          skills: [...prevState.dataCard.skills, selectSkillValue]
        };
        this.saveData(updateSkills);
        return {
          dataCard: updateSkills
        };
      });
    } else {
      const removedSkills = skills.filter(skill => skill !== selectSkillValue)
      this.setState(prevState => {
        const updateSkills = {
          ...prevState.dataCard,
          skills: removedSkills
        };
        this.saveData(updateSkills);
        return {
          dataCard: updateSkills
        };
      })
    }
  }

  changeName(e) {
    const valuename = e.target.value;

    this.setState(prevState => {
      const updatedName = {
        ...prevState.dataCard,
        name: valuename
      };
      this.saveData(updatedName);
      return {
        dataCard: updatedName
      };
    });
  }

  changeJob(e) {
    const valuejob = e.target.value;

    this.setState(prevState => {
      const updatedJob = {
        ...prevState.dataCard,
        job: valuejob
      };
      this.saveData(updatedJob);
      return {
        dataCard: updatedJob
      };
    });
  }

  changeImage(image) {
    this.setState(prevState => {
      const updatedImg = {
        ...prevState.dataCard,
        photo: image
      };
      this.saveData(updatedImg);
      return {
        dataCard: updatedImg
      };
    });
  }

  changeEmail(e) {
    const valueemail = e.target.value;

    this.setState(prevState => {
      const updatedEmail = {
        ...prevState.dataCard,
        email: valueemail
      };
      this.saveData(updatedEmail);
      return {
        dataCard: updatedEmail
      };
    });
  }

  changePhone(e) {
    const valuephone = e.target.value;

    this.setState(prevState => {
      const updatedPhone = {
        ...prevState.dataCard,
        phone: valuephone
      };
      this.saveData(updatedPhone);
      return {
        dataCard: updatedPhone
      };
    });
  }

  changeLinkedin(e) {
    const valuelinkedin = e.target.value;

    this.setState(prevState => {
      const updatedLinkedin = {
        ...prevState.dataCard,
        linkedin: valuelinkedin
      };
      this.saveData(updatedLinkedin);
      return {
        dataCard: updatedLinkedin
      };
    });
  }

  changeGithub(e) {
    const valuegithub = e.target.value;

    this.setState(prevState => {
      const updatedGithub = {
        ...prevState.dataCard,
        github: valuegithub
      };
      this.saveData(updatedGithub);
      return {
        dataCard: updatedGithub
      };
    });
  }

  sendRequest() {
    const dataCard = this.state.dataCard;
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(dataCard),
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(resp => resp.json())
      .then(resultURL => this.showURL(resultURL))
      .catch(error => console.log(error))
  }

  showURL(resultURL) {
    if (resultURL.success) {
      this.setState({ URL: resultURL.cardURL })
    }
  };

  render() {
    const changePalette = this.changePallete;
    const changeTypography = this.changeTypography;
    const changeName = this.changeName;
    const changeJob = this.changeJob;
    const changeEmail = this.changeEmail;
    const changePhone = this.changePhone;
    const changeLinkedin = this.changeLinkedin;
    const changeGithub = this.changeGithub;
    const changeImage = this.changeImage;
    const changeSkills = this.changeSkills;

    return (

      <Switch>
        <Route
          exact
          path='/'
          render={
            props => (
              <Home />
            )
          }
        />
        <Route
          path='/cardgenerator'
          render={
            props => (
              <CardGenerator
                dataCard={this.state.dataCard}
                backSkills={this.state.backSkills}
                changePalette={changePalette}
                changeTypography={changeTypography}
                changeName={changeName}
                changeJob={changeJob}
                changeImage={changeImage}
                changeEmail={changeEmail}
                changePhone={changePhone}
                changeLinkedin={changeLinkedin}
                changeGithub={changeGithub}
                changeSkills={changeSkills}
                sendRequest={this.sendRequest}
                URL={this.state.URL}
                resetInfo={this.resetInfo}
              />
            )}
        />
      </Switch>
    );
  }
}

export default App;
