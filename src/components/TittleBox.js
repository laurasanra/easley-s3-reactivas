import React, { Component } from 'react';

class TittleBox extends Component {
    constructor(props) {
        super(props);

        this.handleColpasable = this.handleColapsable.bind(this);
      }

      handleColapsable(event){
        console.log("hello");

      };

    render() {
        return (
            <div className="title-box" onClick={this.handleColapsable}> <i className={this.props.icon}></i>
                <span className="title-edit">{this.props.tittle}</span>

                <button
                    className="btn-angle btn-fold"> <i className="fas fa-angle-up"></i></button>
                <button className="btn-angle btn-unfold"> <i className="fas fa-angle-down"></i></button>
            </div>

        )
    }
}

export default TittleBox;