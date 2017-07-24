/**
 * Created by sertac.turkel on 21/07/2017.
 */
import React, {Component} from 'react';

import {Button, Dialog, Intent} from "@blueprintjs/core";

import {connect} from 'react-redux';
import {selectReportEvent} from "../actions/eventActions";
import {selectedReport} from "../actions/eventActions";
import { createHashHistory } from 'history';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';


import {User} from "./User";
import {Home} from "./Home";

export const history = createHashHistory();
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

                            <Router>
                                <div>
                                    <Route exact path="/" component={Home}/>
                                    <Route path={this.props.selectedReportValue} component={User}/>
                                </div>
                            </Router>


                            <div className="row">
                                <div className="pt-select col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <select onChange={(e)=>this.props.selectedReport(e.target.value)}>
                                        <option value="sec">Lutfen Seciniz</option>
                                        <option value="Radish">Radish</option>
                                        <option value="Cherry">Cherry</option>
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
                                        history.push(this.props.selectedReportValue);
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
        selectReportClicked: state.events.selectReportClick,
        selectedReportValue: state.events.selectedReportFromCombobox
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        selectReportEvent: () => {
            dispatch(selectReportEvent())
        },
        selectedReport: (selectedReportFromCombobox) => {
            dispatch(selectedReport(selectedReportFromCombobox))
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Report);