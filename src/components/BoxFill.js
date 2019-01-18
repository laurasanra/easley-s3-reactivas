import React, { Component } from "react";
import TittleBox from "./TittleBox";
import  "./BoxFill.scss";

class BoxFill extends Component {
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
              required
            />
          </div>
          <div class="contact">
            <label for="job">Puesto</label>
            <input
              placeholder="Ej: Front-end unicorn"
              id="job"
              type="text"
              name="job"
              required
            />
          </div>
          <div class="contact">
            <label for="image">Imagen de perfil</label>
            <div class="add_image">
              <button class="button_ad_image" type="submit" value="submit">
                Añadir imagen
              </button>
              <input
                type="file"
                name="addImage"
                id="img-selector"
                class="btn__hidden"
              />
              <div class="preview-box">
                <img class="preview-img" src="" />
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
              required
            />
          </div>
          <div class="contact">
            <label for="phone">Teléfono</label>
            <input
              placeholder="Ej: 555-55-55-55"
              id="phone"
              type="tel"
              name="phone"
              required
            />
          </div>
          <div class="contact">
            <label for="linkedin">Linkedin</label>
            <input
              placeholder="Ej: sally.hill"
              id="linkedin"
              type="text"
              name="linkedin"
              required
            />
          </div>
          <div class="contact">
            <label for="github">Github</label>
            <input
              placeholder="Ej: sally-hill"
              id="github"
              type="text"
              name="github"
              required
            />
          </div>
          <seccion className="container-checkSkills">
            <p class="contact checkbox_contact">Habilidades (máximo 3)</p>
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
          </seccion> 
        </form>
      </div>
    );
  }
}

export default BoxFill;
