import React, { Component } from 'react';

class CardViewFooter extends Component {

    render() {
        const dataSkills = this.props.dataCard.skills;
        return ( 
            <div class="card-footer">
                <div class="skills">
                    <ul class="skills__list">
                        {dataSkills.map((skill, index) => {return (<li key={index} className="skills__item skills__item--bg">{skill}</li>)
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default CardViewFooter;