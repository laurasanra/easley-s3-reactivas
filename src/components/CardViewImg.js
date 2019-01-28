import React, { Component } from 'react';
import DefaultImg from "../images/cebra1.png";
import PropTypes from "prop-types";
import "./CardViewImg.scss";

class CardViewImg extends Component {
    render() {
        const dataCardPhoto = this.props.dataCard.photo;
        const Img = {
        backgroundImage: `url(${dataCardPhoto})`
        }
        const defaultImg = {
        backgroundImage: `url(${DefaultImg})`
        }
        if(dataCardPhoto === ""){
            return(<div className="card-img" id="random" style={defaultImg}>
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