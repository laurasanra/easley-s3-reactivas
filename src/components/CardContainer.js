import React, { Component } from 'react';
import Reset from './Reset';
import cardview from './CardView';

class CardContainer extends Component {
    render() {
        return (
            <section>
                <div class="build-card">
                <Reset containerReset="reset-box" linkReset="reset-link" btnReset="reset-btn"  />
                {/* <mama cardview /> */}
                </div>
            </section>
        )
    }

}

// CardContainer.PropTypes = {

// }

export default CardContainer;
