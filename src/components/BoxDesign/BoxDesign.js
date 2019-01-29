import React, { Component } from 'react';
import TittleBox from '../TittleBox/TittleBox';
import PropTypes from "prop-types";
import "./BoxDesign.scss";

class BoxDesign extends Component {

    render() {
        const { index, handleCollapsable, hideBox } = this.props;
        const hideBoxResult = hideBox(index);
        return (
            <div className="box-selector edit-design flex-container">
                <TittleBox icon="far fa-object-ungroup icons-edit" tittle="Diseña" handleCollapsable={handleCollapsable} index={index} hideBoxResult={hideBoxResult} />
                <div className={`${hideBoxResult}`}>
                    <div className="selectors-design">
                        <h2 className="text-color">Colores</h2>

                        <ul onChange={this.props.changePalette}>
                            <li className="list-pallete">
                                <label htmlFor="pallete-blue" className="label-color">
                                    <input id="pallete-blue" type="radio" value="1" name="pallete-colors" onChange={this.props.changePalette}
                                        className="selection-input" checked={this.props.dataCard.pallete === "1"} />

                                </label>
                                <div className="pallet-box">
                                    <div className="blue-dark-color"></div>
                                    <div className="blue-midtone-color"></div>
                                    <div className="blue-ligth-color"></div>
                                </div>
                            </li>
                            <li className="list-pallete">
                                <label htmlFor="pallete-red" className="label-color">
                                    <input id="pallete-red" type="radio" value="2" name="pallete-colors" className="selection-input" onChange={this.props.changePalette} checked={this.props.dataCard.pallete === "2"}
                                    />
                                </label>
                                <div className="pallet-box">
                                    <div className="red-dark-color"></div>
                                    <div className="red-midtone-color"></div>
                                    <div className="red-ligth-color"></div>
                                </div>
                            </li>
                            <li className="list-pallete">
                                <label htmlFor="pallete-grey" className="label-color">
                                    <input id="pallete-grey" type="radio" value="3" name="pallete-colors"
                                        className="selection-input" onChange={this.props.changePalette} checked={this.props.dataCard.pallete === "3"} />
                                </label>
                                <div className="pallet-box">
                                    <div className="grey-dark-color"></div>
                                    <div className="grey-ligth-color"></div>
                                    <div className="grey-midtone-color"></div>
                                </div>
                            </li>
                            <li className="list-pallete">
                                <label htmlFor="pallete-gum" className="label-color">
                                    <input id="pallete-gum" type="radio" value="4" name="pallete-colors" className="selection-input"
                                    /> <i className="far fa-gem"></i>

                                </label>
                                <div className="pallet-box">
                                    <div className="blue-gum-color"></div>
                                    <div className="pink-midtone-color"></div>
                                    <div className="pink-light-color"></div>
                                </div>
                            </li>
                            <li className="list-pallete">
                                <label htmlFor="pallete-purple" className="label-color">
                                    <input id="pallete-purple" type="radio" value="5" name="pallete-colors"
                                        className="selection-input" /> <i className="far fa-gem"></i>

                                </label>
                                <div className="pallet-box">
                                    <div className="purple-midtone-color"></div>
                                    <div className="purple-dark-color"></div>
                                    <div className="purple-light-color"></div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="selectors-font">
                        <h2 className="text-color">Fuentes</h2>

                        <ul>
                            <li className="list-font">
                                <label htmlFor="font-ubuntu" className="label-font">
                                    <input id="font-ubuntu" type="radio" value="1" name="select-font" className="selection-input" onChange={this.props.changeTypography}
                                        checked={this.props.dataCard.typography === "1"} />
                                </label>
                                <div className="font-box">
                                    <div className="select-ubuntu">Ubuntu</div>
                                </div>
                            </li>
                            <li className="list-font">
                                <label htmlFor="font-comic" className="label-font">
                                    <input id="font-comic" type="radio" value="2" name="select-font" className="selection-input" onChange={this.props.changeTypography}
                                        checked={this.props.dataCard.typography === "2"} />
                                </label>
                                <div className="font-box">
                                    <div className="select-comic">Comic Sans</div>
                                </div>
                            </li>
                            <li className="list-font">
                                <label htmlFor="font-montse" className="label-font">
                                    <input id="font-montse" type="radio" value="3" name="select-font" className="selection-input" onChange={this.props.changeTypography}
                                        checked={this.props.dataCard.typography === "3"} />
                                </label>
                                <div className="font-box">
                                    <div className="select-montse">Montserrat</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

BoxDesign.propTypes = {
    dataCard: PropTypes.object.isRequired,
    changePalette: PropTypes.func.isRequired,
    changeTypography: PropTypes.func.isRequired,
    handleCollapsable: PropTypes.func.isRequired,
    hideBox: PropTypes.func.isRequired,
    index: PropTypes.string.isRequired
}

export default BoxDesign;