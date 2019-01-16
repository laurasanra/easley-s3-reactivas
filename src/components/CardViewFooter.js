import React, { Component } from 'react';

class CardViewFooter extends Component {
    
    // addSkillsArr(){
    //     const dataSkills = this.props.dataCard.skills;
        // if (dataSkills.length  === 0){
        //     console.log('aquiiii');
        //     dataSkills.push('HTML', 'CSS', 'GULP');
        //     dataSkills.map((skill, index) => {
        //     // return <li key={index} className="skills__item skills__item--bg">{skill}</li>})
        //     return <div>hola</div>})
        // } else {
        // dataSkills.map((skill, index) => {
        //     console.log(`skill ${skill} el array  ${dataSkills}`);
        //         return (<li key={index} className="skills__item skills__item--bg">{skill}</li>);

        //     })}
    // }

    render() {   
        const dataSkills = this.props.dataCard.skills; 
        return ( 
            <div class="card-footer">
                <div class="skills">
                    <ul class="skills__list">

                    if (dataSkills.length  === 0){
                        console.log('aquiiii');
                        dataSkills.push('HTML', 'CSS', 'GULP');
                        dataSkills.map((skill, index) => {
                        // return <li key={index} className="skills__item skills__item--bg">{skill}</li>})
                        return <div>hola</div>})
                    } else {
                        dataSkills.map((skill, index) => {
                        console.log(`skill ${skill} el array  ${dataSkills}`);
                        return (<li key={index} className="skills__item skills__item--bg">{skill}</li>);
                        })}






                        {/* {this.addSkillsArr()} */}
                        {/* {skills.map((skill, index) => {return (<li key={index} className="skills__item skills__item--bg">{skill}</li>)
                        })} */}
                    </ul>
                </div>
            </div>
        );
    }
}

export default CardViewFooter;