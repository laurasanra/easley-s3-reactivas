import React, { Component } from 'react';

class TittleBox extends Component {

    render() {
        const { handleCollapsable, icon, tittle, index} = this.props;
        
        const arrow = (this.props.hideBoxResult === "") ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>;

        return (
            <div className="title-box" onClick={handleCollapsable} index={index}>
                <i className={icon}></i>
                <span className="title-edit">{tittle}</span>
                <button
                    className="btn-angle">{arrow}</button>
            </div>

        )
    }
}

export default TittleBox;