import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Map} from 'immutable';
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import {default_record} from "../record_reducers";
import {getModalId, getRecord} from "../../reducers";
import UpdateRecordModal from "./UpdateRecordModal";

class UpdateRecordModalContainer extends Component {

    render() {
        const {modal_id} = this.props;
        if (!modal_id) {
            return null
        }
        return (
            <UpdateRecordModal
                edit_record={this.props.edit_record}
            />
        )
    }
}
UpdateRecordModalContainer.defaultProps = {
    edit_record: default_record
};
UpdateRecordModalContainer.propTypes = {
}

const mapStateToProps = (state, ownProps) => {
    const modal_id = getModalId(state);
    return {
        modal_id,
        edit_record: getRecord(state, modal_id),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRecordModalContainer)
