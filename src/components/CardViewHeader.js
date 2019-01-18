import React, { Component } from "react";

class CardViewHeader extends Component {

  changeFont(){
    const incomingFont = this.props.dataCard.typography;
    let selectedFont = "";
    if (incomingFont === "1") {
      selectedFont = "font-ubuntu"
    } else if(incomingFont === "2") {
      selectedFont = "font-comic"
    } else if(incomingFont === "3"){
      selectedFont = "font-montse"
    }
    return selectedFont;
  }


  render() {
      const dataCard = this.props.dataCard;
    return (
      <div className={`card-header ${this.changeFont()}`}>
        <h1 className="name-person">{(dataCard.name=== "")? `Nombre Apellidos` : dataCard.name}</h1>

        <h3 className="work-space">{(dataCard.job=== "")? `Front-end developer` : dataCard.job}</h3>
      </div>
    );
  }
}

export default CardViewHeader;
