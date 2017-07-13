import React, {Component} from 'react'
import { connect } from 'react-redux'
import Records from "./Records";
import {getRecords} from "../../reducers";


class RecordsContainer extends Component {
    render() {
        return (
            <Records
                records={this.props.records}
            />
        )
    }
}
RecordsContainer.defaultProps = {
};
RecordsContainer.propTypes = {
}


const mapStateToProps = (state, ownProps) => ({
    records: getRecords(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
});



export default connect(mapStateToProps, mapDispatchToProps)(RecordsContainer)