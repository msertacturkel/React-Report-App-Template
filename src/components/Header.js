/**
 * Created by sertac.turkel on 21/07/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clickEvent} from "../actions/eventActions";

class Header extends Component {
    render() {
        return (

            <nav className="pt-navbar .modifier pt-dark">
                <div className="pt-navbar-group pt-align-left">
                    <div className="pt-navbar-heading">Report Application Template</div>
                    <span className="pt-navbar-divider"></span>
                    <button className="pt-button pt-minimal pt-icon-vertical-bar-chart-desc"
                            onClick={this.props.clickEvent}>Filters
                    </button>
                    <span className="pt-navbar-divider"></span>
                    <button className="pt-button pt-minimal pt-icon-list">
                        Reports
                    </button>
                </div>
                <div className="pt-navbar-group pt-align-right">

                    <span className="pt-navbar-divider"></span>
                    <button className="pt-button pt-minimal pt-icon-user"></button>
                    <button className="pt-button pt-minimal pt-icon-notifications"></button>
                    <button className="pt-button pt-minimal pt-icon-cog"></button>
                </div>
            </nav>

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
        }
    };

}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

