/**
 * Created by sertac.turkel on 21/07/2017.
 */
import React, {Component} from 'react';
import {Tab2, Tabs2} from "@blueprintjs/core";
import TableTab from "./tabcomponents/TableTab"
import Graph from "./tabcomponents/GraphTab"


import {connect} from 'react-redux';


class Main extends Component {
    render() {
        return (
            <div className="pt-card">

                <Tabs2 id="Tabs2Example" onChange={this.handleTabChange}>
                    <Tab2 id="tbl" title="Table" panel={<TableTab />}/>
                    <Tab2 id="grhp" title="Graph" panel={<Graph />}/>
                    <Tabs2.Expander />
                </Tabs2>
            </div>

        );
    }
};
const mapStateToProps = (state) => {
    return {

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        }
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);