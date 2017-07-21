/**
 * Created by sertac.turkel on 21/07/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Left extends Component {
    render() {
        return (
            <div className="pt-card">Left : {this.props.clicked ? "true":"false"}</div>
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
    };

}
export default connect(mapStateToProps, mapDispatchToProps)(Left);
