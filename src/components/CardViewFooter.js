import React, { Component } from 'react';
import PropTypes from "prop-types";

const defaultSkills = ['HTML', 'CSS', 'GULP'];

class CardViewFooter extends Component {

    addSkillsArr() {
        const dataSkills = this.props.dataCard.skills;
        if (dataSkills.length === 0) {
            return (
                defaultSkills.map((defSkill, index) => {
                    return <li key={index} className="skills__item skills__item--bg">{defSkill}</li>
                }))
        }
        else {
            return (dataSkills.map((skill, index) => {
                return (<li key={index} className="skills__item skills__item--bg">{skill}</li>)
            }))
        }
    }
    render() {
        return (
            <div className="card-footer">
                <div className="skills">
                    <ul className="skills__list">
                        {this.addSkillsArr()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default CardViewFooter;