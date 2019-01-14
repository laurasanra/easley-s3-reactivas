import React, { Component } from "react";

class CardViewHeader extends Component {
  render() {
      const dataCard = this.props.dataCard;
    return (
      <div class="card-header">
        <h1 class="name-person">{dataCard.name}</h1>

        <h3 class="work-space">Front-end developer</h3>
      </div>
    );
  }
}

export default CardViewHeader;
