import React, { Component } from "react";

class CardViewHeader extends Component {
  render() {
      const dataCard = this.props.dataCard;
    return (
      <div className="card-header">
        <h1 className="name-person">{(dataCard.name=== "")? `Nombre Apellidos` : dataCard.name}</h1>

        <h3 className="work-space">{(dataCard.job=== "")? `Front-end developer` : dataCard.job}</h3>
      </div>
    );
  }
}

export default CardViewHeader;
