/**
 * Created by sertac.turkel on 21/07/2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Cell, Column, Table } from '@blueprintjs/table';

const renderCell = (rowIndex) => <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>;

class TableTab extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4">
                    <Table numRows={10}>
                        <Column name="Dollars" renderCell={renderCell}/>
                    </Table>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(TableTab);
