import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Record from "./Record";


class RecordContainer extends Component {
    render() {
        const {record} = this.props;
        return (
            <Record
                id={record.get('id')}
                first_name={record.get('first_name')}
                last_name={record.get('last_name')}
                phone_number={record.get('phone_number')}
            />
        )
    }
}
RecordContainer.defaultProps = {
};
RecordContainer.propTypes = {
    record: ImmutablePropTypes.map.isRequired,
}

export default RecordContainer
