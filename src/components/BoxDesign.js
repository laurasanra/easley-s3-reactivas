import React, { Component } from 'react';
import TittleBox from './TittleBox';

class BoxDesign extends Component {
    render(){
        return (
            <div class="box-selector edit-design flex-container">

            <TittleBox icon="far fa-object-ungroup icons-edit" tittle= "Diseña" />
            
                <div class="container-hide hide-box bring-box">
                    <div class="selectors-design">
                        <h2 class="text-color">Colores</h2>
        
                        <ul class="colors-list">
                            <li class="list-pallete">
                                <label for="pallete-blue" class="label-color">
                                    <input id="pallete-blue" type="radio" value="1" name="pallete-colors"
                                        class="selection-input" />
                                </label>
                                <div class="pallet-box">
                                    <div class="blue-dark-color"></div>
                                    <div class="blue-midtone-color"></div>
                                    <div class="blue-ligth-color"></div>
                                </div>
                            </li>
                            <li class="list-pallete">
                                <label for="pallete-red" class="label-color">
                                    <input id="pallete-red" type="radio" value="2" name="pallete-colors" class="selection-input"
                                    />
                                </label>
                                <div class="pallet-box">
                                    <div class="red-dark-color"></div>
                                    <div class="red-midtone-color"></div>
                                    <div class="red-ligth-color"></div>
                                </div>
                            </li>
                            <li class="list-pallete">
                                <label for="pallete-grey" class="label-color">
                                    <input id="pallete-grey" type="radio" value="3" name="pallete-colors"
                                        class="selection-input" />
                                </label>
                                <div class="pallet-box">
                                    <div class="grey-dark-color"></div>
                                    <div class="grey-ligth-color"></div>
                                    <div class="grey-midtone-color"></div>
                                </div>
                            </li>
                            <li class="list-pallete">
                                <label for="pallete-gum" class="label-color">
                                    <input id="pallete-gum" type="radio" value="4" name="pallete-colors" class="selection-input"
                                    /> <i class="far fa-gem"></i>
        
                                </label>
                                <div class="pallet-box">
                                    <div class="blue-gum-color"></div>
                                    <div class="pink-midtone-color"></div>
                                    <div class="pink-light-color"></div>
                                </div>
                            </li>
                            <li class="list-pallete">
                                <label for="pallete-purple" class="label-color">
                                    <input id="pallete-purple" type="radio" value="5" name="pallete-colors"
                                        class="selection-input" /> <i class="far fa-gem"></i>
        
                                </label>
                                <div class="pallet-box">
                                    <div class="purple-midtone-color"></div>
                                    <div class="purple-dark-color"></div>
                                    <div class="purple-light-color"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
        
                    <div class="selectors-font">
                        <h2 class="text-color">Fuentes</h2>
        
                        <ul class="fonts-list">
                            <li class="list-font">
                                <label for="font-ubuntu" class="label-font">
                                    <input id="font-ubuntu" type="radio" value="1" name="select-font" class="selection-input"
                                    />
                                </label>
                                <div class="font-box">
                                    <div class="select-ubuntu">Ubuntu</div>
                                </div>
                            </li>
                            <li class="list-font">
                                <label for="font-comic" class="label-font">
                                    <input id="font-comic" type="radio" value="2" name="select-font" class="selection-input"
                                    />
                                </label>
                                <div class="font-box">
                                    <div class="select-comic">Comic Sans</div>
                                </div>
                            </li>
                            <li class="list-font">
                                <label for="font-montse" class="label-font">
                                    <input id="font-montse" type="radio" value="3" name="select-font" class="selection-input"
                                    />
                                </label>
                                <div class="font-box">
                                    <div class="select-montse">Montserrat</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoxDesign;