import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import ModalContainer from "../../components/Modal/ModalContainer";

class UpdateRecordModal extends Component {

    render() {
        return (
            <ModalContainer>
                {JSON.stringify(this.props.edit_record.toJS())}
            </ModalContainer>

        )
    }
}
UpdateRecordModal.defaultProps = {
};
UpdateRecordModal.propTypes = {
    edit_record: ImmutablePropTypes.map.isRequired,
}

export default UpdateRecordModal
