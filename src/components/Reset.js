import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
library.add(faTrashAlt)

class Reset extends Component {
    render() { 
        return (
            <div className={this.props.containerReset}> 
                <a href="/" className={this.props.linkReset}>
                <div className={this.props.btnReset}><FontAwesomeIcon icon="trash"/>reset</div>
                </a>
            </div>);
    }
}

export default Reset;
                    