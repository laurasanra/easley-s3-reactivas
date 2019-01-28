import React, { Component } from 'react';
import PropTypes from "prop-types";
import "./CardViewImg.scss";

class CardViewImg extends Component {
    render() {
        const dataCardPhoto = this.props.dataCard.photo;
        const Img = {
        backgroundImage: `url(${dataCardPhoto})`
        }
        if(dataCardPhoto === ""){
            return(<div className="card-img" id="random">
            </div>)
            
        }else{
            return (
                <div className="card-img" id="random" style={Img}>
                </div>
            );
        }

    }
}

CardViewImg.propTypes = {
    dataCard: PropTypes.object.isRequired
}

export default CardViewImg;