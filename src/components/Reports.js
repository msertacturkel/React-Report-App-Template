/**
 * Created by sertac.turkel on 21/07/2017.
 */
import React, {Component} from 'react';

import {Button, Dialog, Intent} from "@blueprintjs/core";

import {connect} from 'react-redux';
import {selectReportEvent} from "../actions/eventActions";

class Report extends Component {

    render() {
        return (
            <div className="pt-card" hidden="true">
                <div>
                    <Dialog
                        iconName="home"
                        isOpen={this.props.selectReportClicked}
                        onClose={()=>this.props.selectReportEvent}
                        title="Select Report"
                    >

                        <div className="pt-dialog-body">
                            <div className="row">
                                <div className="pt-select col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <select>
                                        <option>Select Report</option>
                                        <option defaultValue="1">One</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="pt-dialog-footer">
                            <div className="pt-dialog-footer-actions">
                                <Button
                                    intent={Intent.DANGER}
                                    onClick={() => {
                                        this.props.selectReportEvent();
                                    }}
                                > <span className="pt-icon-standard pt-icon-arrow-left"></span>Back</Button>
                                <Button
                                    intent={Intent.PRIMARY}
                                    text="Go to Report"
                                    onClick={() => {
                                        this.props.selectReportEvent();
                                    }}
                                />
                                <h1>{this.props.selectReportClicked}</h1>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        selectReportClicked: state.events.selectReportClick
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        selectReportEvent: () => {
            dispatch(selectReportEvent())
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Report);