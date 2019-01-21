import React, { Component } from 'react';
import Reset from './Reset';
import CardView from './CardView';

class CardContainer extends Component {
    render() {
        return (
            <section>
                <div className="build-card">
                <Reset containerReset="reset-box" linkReset="reset-link" btnReset="reset-btn"  />
                <CardView />
                </div>
            </section>
        )
    }

}

// CardContainer.PropTypes = {

// }

export default CardContainer;
