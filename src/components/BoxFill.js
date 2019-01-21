import React, { Component } from "react";
import TittleBox from "./TittleBox";
import  "./BoxFill.scss";

const fr = new FileReader();

class BoxFill extends Component {
  constructor(props) {
    super(props);
    this.fakeClick = this.fakeClick.bind(this)
    this.fileInput = React.createRef();
    this.changeImage = this.changeImage.bind(this);
    this.state = {
      fileName: 'Image', 
      fileUrl: ''
    }
  }

  fakeClick(){
    return this.props.fileInput.current.click();
  }

  changeImage(file) {
    let fileReader = new FileReader();
    fileReader.onloadend = this.handleFileReader; 
  }

  writeImage() {
    const url = fr.result;
    this.setState({
      fileUrl: url
    });
  }

  onChangeImage(event){
    return this.props.changeImage(event.target.files[0]);
  }

  render() {
    const skills = this.props.backSkills;
    const {index, handleCollapsable, hideBox} = this.props;    

    return (
      <div className="box-selector edit-fill flex-container">
        <TittleBox icon="far fa-keyboard icons-edit" tittle="Rellena" handleCollapsable = {handleCollapsable} index = {index}/>

        <form className={`fill bring-box ${hideBox(index)}`}>
          <div className="contact">
            <label htmlFor="firstName">Nombre completo</label>
            <input
              placeholder="Ej: Sally Jill"
              id="firstName"
              type="text"
              name="name"
              required
              onChange={this.props.changeName}
              value={this.props.dataCard.name}
            />
          </div>
          <div className="contact">
            <label htmlFor="job">Puesto</label>
            <input
              placeholder="Ej: Front-end unicorn"
              id="job"
              type="text"
              name="job"
              required
              onChange={this.props.changeJob}
              value={this.props.dataCard.job}
            />
          </div>
          <div className="contact">
            <label htmlFor="image">Imagen de perfil</label>
            <div className="add_image">
              <button className="button_ad_image" type="submit" value="submit" onClick={this.fakeClick}>
                Añadir imagen
              </button>
              <input
                type="file"
                name="addImage"
                id="img-selector"
                className="btn__hidden"
                ref={this.props.fileInput}
                onChange={this.onChangeImage}></input>
            
              <div className="preview-box">
                <img className="preview-img" src="" />
              </div>
            </div>
          </div>
          <div className="contact">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Ej: sally-hill@gmail.com"
              id="email"
              type="email"
              name="email"
              required
              onChange={this.props.changeEmail}
              value={this.props.dataCard.email}
            />
          </div>
          <div className="contact">
            <label htmlFor="phone">Teléfono</label>
            <input
              placeholder="Ej: 555-55-55-55"
              id="phone"
              type="tel"
              name="phone"
              required
              onChange={this.props.changePhone}
              value={this.props.dataCard.phone}
            />
          </div>
          <div className="contact">
            <label htmlFor="linkedin">Linkedin</label>
            <input
              placeholder="Ej: sally.hill"
              id="linkedin"
              type="text"
              name="linkedin"
              required
              onChange={this.props.changeLinkedin}
              value={this.props.dataCard.linkedin}
            />
          </div>
          <div className="contact">
            <label htmlFor="github">Github</label>
            <input
              placeholder="Ej: sally-hill"
              id="github"
              type="text"
              name="github"
              required
              onChange={this.props.changeGithub}
              value={this.props.dataCard.github}
            />
          </div>
          <section className="container-checkSkills">
            <p className="contact checkbox_contact">Habilidades (máximo 3)</p>
            {/* <div class="container-checks check_styles"> */}
              <ul className="check_styles container-checks skillsOptions">
                {skills.map((skill, index) =>{
                  return (
                    <div className="check_styles" key={index}>
                    <label htmlFor={skill}>
                      <input className="skill-Box-Check" id={skill} type="checkbox" value={skill} name="" />
                      {skill}
                    </label>
                  </div>
                  )
                  
              } )}
            </ul>
          {/* </div> */}
          </section> 
        </form>
      </div>
    );
  }
}

export default BoxFill;
