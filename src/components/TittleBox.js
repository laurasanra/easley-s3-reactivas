import React, { Component } from 'react';

class TittleBox extends Component {
    
    render() {
        const { handleCollapsable, icon, tittle, index } = this.props;
        return (
            <div className="title-box" onClick={handleCollapsable} index = {index}>
                <i className={icon}></i>
                <span className="title-edit">{tittle}</span>
                <button
                    className="btn-angle btn-fold"> <i className="fas fa-angle-up"></i></button>
                <button className="btn-angle btn-unfold"> <i className="fas fa-angle-down"></i></button>
            </div>

        )
    }
}

export default TittleBox;