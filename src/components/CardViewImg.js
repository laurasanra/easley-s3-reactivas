import React, { Component } from 'react';
import DefaultImg from "../images/cebra1.png";

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
            return(<div class="card-img" id="random" style={defaultImg}>
            </div>)
            
        }else{

            return (
                <div class="card-img" id="random" style={Img}>
                </div>
            );
        }

    }
}


export default CardViewImg;