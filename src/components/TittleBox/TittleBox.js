import React, { Component } from 'react';
import PropTypes from "prop-types";
import "./TittleBox.scss";

class TittleBox extends Component {

    render() {
        const { handleCollapsable, icon, tittle, index } = this.props;

        const arrow = (this.props.hideBoxResult === "") ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>;

        return (
            <div className="title-box" onClick={handleCollapsable} index={index}>
                <i className={icon}></i>
                <span className="title-edit">{tittle}</span>
                <button className="btn-angle">{arrow}</button>
            </div>

        )
    }
}

TittleBox.propTypes = {
    icon: PropTypes.string.isRequired,
    tittle: PropTypes.string.isRequired,
    handleCollapsable: PropTypes.func.isRequired,
    index: PropTypes.string.isRequired,
    hideBoxResult: PropTypes.string.isRequired,
}

export default TittleBox;