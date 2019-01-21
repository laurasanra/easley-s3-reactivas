import React, { Component } from "react";
import TittleBox from "./TittleBox";
import "./BoxFill.scss";

const fr = new FileReader();

class BoxFill extends Component {
  constructor(props) {
    super(props);
    this.fakeClick = this.fakeClick.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      fileName: '',
      fileUrl: ''
    }
  }

  fakeClick() {
    return this.fileInput.current.click();
  }

  writeImage() {

    const url = fr.result;
    this.props.changeImage(url);
  }

  handleFileChange(event) {
    const myFile = event.target.files[0];
    const name = myFile.name;
    fr.addEventListener('load', this.writeImage);
    fr.readAsDataURL(myFile);

    this.setState({
      fileName: name
    });
  }

  render() {
    const skills = this.props.backSkills;


    return (
      <div class="box-selector edit-fill flex-container">
        <TittleBox icon="far fa-keyboard icons-edit" tittle="Rellena" />

        <form class="fill  bring-box">
          <div class="contact">
            <label for="firstName">Nombre completo</label>
            <input
              placeholder="Ej: Sally Jill"
              id="firstName"
              type="text"
              name="name"
              onChange={this.props.changeName}
              value={this.props.dataCard.name}
            />
          </div>
          <div class="contact">
            <label for="job">Puesto</label>
            <input
              placeholder="Ej: Front-end unicorn"
              id="job"
              type="text"
              name="job"
              onChange={this.props.changeJob}
              value={this.props.dataCard.job}
            />
          </div>
          <div className="contact">
            <label for="image">Imagen de perfil</label>
            <div class="add_image">
              <button className="button_ad_image" type="button" value="submit" onClick={this.fakeClick} >
                Añadir imagen
              </button>
              <input
                type="file"
                name="addImage"
                id="img-selector"
                className="btn__hidden"
                ref={this.fileInput}
                onChange={this.handleFileChange}></input>

              <div className="preview-box">
                <img className="preview-img" src={this.props.dataCard.photo} alt={this.state.fileName} />
              </div>
            </div>
          </div>
          <div class="contact">
            <label for="email">Email</label>
            <input
              placeholder="Ej: sally-hill@gmail.com"
              id="email"
              type="email"
              name="email"
              onChange={this.props.changeEmail}
              value={this.props.dataCard.email}
            />
          </div>
          <div class="contact">
            <label for="phone">Teléfono</label>
            <input
              placeholder="Ej: 555-55-55-55"
              id="phone"
              type="tel"
              name="phone"
              onChange={this.props.changePhone}
              value={this.props.dataCard.phone}
            />
          </div>
          <div class="contact">
            <label for="linkedin">Linkedin</label>
            <input
              placeholder="Ej: sally.hill"
              id="linkedin"
              type="text"
              name="linkedin"
              onChange={this.props.changeLinkedin}
              value={this.props.dataCard.linkedin}
            />
          </div>
          <div class="contact">
            <label for="github">Github</label>
            <input
              placeholder="Ej: sally-hill"
              id="github"
              type="text"
              name="github"
              onChange={this.props.changeGithub}
              value={this.props.dataCard.github}
            />
          </div>
          <seccion className="container-checkSkills">
            <p class="contact checkbox_contact">Habilidades (máximo 3)</p>
            {/* <div class="container-checks check_styles"> */}
            <ul className="check_styles container-checks skillsOptions">
              {skills.map((skill, index) => {
                return (
                  <div className="check_styles" key={index}>
                    <label htmlFor={skill}>
                      <input className="skill-Box-Check" id={skill} type="checkbox" value={skill} name="" />
                      {skill}
                    </label>
                  </div>
                )

              })}
            </ul>
            {/* </div> */}
          </seccion>
        </form>
      </div>
    );
  }
}

export default BoxFill;
