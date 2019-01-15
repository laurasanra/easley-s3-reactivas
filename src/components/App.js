import React, { Component } from 'react';
import CardGenerator from './CardGenerator';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          dataCard:{
            pallete: "",
            typography: "",
            name: "Nombre Apellido",
            job: "Front-end developer",
            photo: "",
            email: "",
            phone: "",
            linkedin: "",
            github: "",
            skills: [],
            success: "",
            cardURL: "",
            error: ""
          }
        }
    }
    
    render(){
        return <CardGenerator dataCard={this.state.dataCard} />
    }
}

export default App;