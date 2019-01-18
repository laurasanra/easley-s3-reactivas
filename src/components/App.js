import React, { Component } from 'react';
import CardGenerator from './CardGenerator';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          dataCard:{
            pallete: "5",
            typography: "",
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
          },
          backSkills:[""],
        }
        this.getBackSkills();
    }

    getBackSkills(){
        fetch("https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json")
        .then(response =>response.json())
        .then(data => this.setState({backSkills:data.skills}))
    }
    
    render(){
        return <CardGenerator dataCard={this.state.dataCard} backSkills={this.state.backSkills}/>
    }
}

export default App;