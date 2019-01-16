import React, { Component } from "react";

class CardViewHeader extends Component {
  render() {
      const dataCard = this.props.dataCard;
    return (
      <div class="card-header">
        <h1 class="name-person">{(dataCard.name=== "")? `Nombre Apellidos` : dataCard.name}</h1>

        <h3 class="work-space">{(dataCard.job=== "")? `Front-end developer` : dataCard.job}</h3>
      </div>
    );
  }
}

export default CardViewHeader;
