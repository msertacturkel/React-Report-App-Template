/**
 * Created by sertac.turkel on 21/07/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clickEvent} from "../actions/eventActions";
import {donbebegim} from "../actions/eventActions";

class Left extends Component {
    render() {
        return (
            <div className="pt-card">Left : {this.props.clicked ? "true" : "false"}
                <hr/>
                <button type="button" className="pt-button pt-intent-success" onClick={() => this.props.donbebegim()}>
                    Next step
                    <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
                </button>
            </div>
        );
    }
}
;
const mapStateToProps = (state) => {
    return {
        clicked: state.events.click

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        clickEvent: () => {
            dispatch(clickEvent())
        },
        donbebegim: () => {
            dispatch(donbebegim())
        }
    };

}
export default connect(mapStateToProps, mapDispatchToProps)(Left);
