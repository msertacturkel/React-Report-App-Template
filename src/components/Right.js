/**
 * Created by sertac.turkel on 21/07/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';


class Right extends Component {
    render() {
        return (
            <div className="pt-card">Right : {this.props.clicked ? "true":"false"}
                <hr/>
                Don bebegim: {this.props.don ? "dondum" : "donmem"}</div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        clicked: state.events.click,
        don: state.events.don
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
    };

}
export default connect(mapStateToProps, mapDispatchToProps)(Right);