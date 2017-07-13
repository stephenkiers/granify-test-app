import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Record from "./Record";
import {reduxAppStateSetModalId} from "../../AppState/actions";


class RecordContainer extends Component {
    constructor(props) {
        super(props);
        this.onUpdateClick = () => {
            this.props.setModalId(this.props.record.get('id'))
        }
    }
    render() {
        const {record} = this.props;

        if (record.get('state') !== 'idle') {
            return (
                <div className="record clearfix">
                    <strong>Saving...</strong>
                </div>
            )
        }

        return (
            <Record
                id={record.get('id')}
                first_name={record.get('first_name')}
                last_name={record.get('last_name')}
                phone_number={record.get('phone_number')}
                onUpdateClick={this.onUpdateClick}
            />
        )
    }
}
RecordContainer.defaultProps = {
};
RecordContainer.propTypes = {
    record: ImmutablePropTypes.map.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    setModalId(id) {
        dispatch(reduxAppStateSetModalId(id))
    }
});



export default connect(mapStateToProps, mapDispatchToProps)(RecordContainer)
