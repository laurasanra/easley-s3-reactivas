import React, { Component } from 'react';

class TittleBox extends Component {
    
    render() {
        return (
            <div className="title-box" onClick={this.props.handleCollapsable}> <i className={this.props.icon}></i>
                <span className="title-edit">{this.props.tittle}</span>

                <button
                    className="btn-angle btn-fold"> <i className="fas fa-angle-up"></i></button>
                <button className="btn-angle btn-unfold"> <i className="fas fa-angle-down"></i></button>
            </div>

        )
    }
}

export default TittleBox;