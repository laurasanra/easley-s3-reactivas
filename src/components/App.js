import React, { Component } from 'react';
import CardGenerator from './CardGenerator';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          dataCard:{
            pallete: "",
            typography: "",
            name: "",
            job: "Front-end developer",
            photo: "",
            email: "",
            phone: "",
            linkedin: "",
            github: "",
            skills: [
                'emma', 
                'Laura',
                'queens',
                'nasi'
            ],
            success: "",
            cardURL: "",
            error: ""
          },
          backSkills:[],
        }
        this.getBackSkills();
    }

    getBackSkills(){
        fetch("https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json")
        .then(response =>response.json())
        .then(data => this.setState({backSkills:data}))
    }
    
    render(){
        return <CardGenerator dataCard={this.state.dataCard} />
    }
}

export default App;