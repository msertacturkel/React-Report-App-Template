/**
 * Created by sertac.turkel on 21/07/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clickEvent} from "../actions/eventActions";
import {Button, Dialog, Intent} from "@blueprintjs/core";

class Filter extends Component {

    render() {
        return (
            <div className="pt-card" hidden="true">
                <div>
                    <Dialog
                        iconName="home"
                        isOpen={this.props.clicked}
                        onClose={()=>this.props.clickEvent}
                        title="Select Filter"
                    >

                        <div className="pt-dialog-body">
                            <div className="row">
                                <div className="pt-select col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <select>
                                        <option>Filter1</option>
                                        <option defaultValue="1">One</option>
                                    </select>
                                </div>
                                <div className="pt-select col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <select>
                                        <option>Filter2</option>
                                        <option defaultValue="2">Two</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"><br/></div>
                            <div className="row">
                                <div className="pt-select col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <select>
                                        <option>Filter3</option>
                                        <option defaultValue="3">Three</option>
                                    </select>
                                </div>
                                <div className="pt-select col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <select>
                                        <option>Filter4</option>
                                        <option defaultValue="4">Four</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"><br/></div>
                            <div className="row">
                                <div className="pt-select col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <select>
                                        <option>Filter5</option>
                                        <option defaultValue="5">Five</option>
                                    </select>
                                </div>
                                <div className="pt-select col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <select>
                                        <option>Filter6</option>
                                        <option defaultValue="6">Six</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="pt-dialog-footer">
                            <div className="pt-dialog-footer-actions">
                                <Button
                                    intent={Intent.DANGER}
                                    onClick={() => {
                                        this.props.clickEvent();
                                    }}
                                > <span className="pt-icon-standard pt-icon-arrow-left"></span>Back</Button>
                                <Button
                                    intent={Intent.PRIMARY}
                                    text="Get Report Data"
                                    onClick={() => {
                                        this.props.clickEvent();
                                    }}
                                />
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
        clicked: state.events.click,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        clickEvent: () => {
            dispatch(clickEvent())
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);