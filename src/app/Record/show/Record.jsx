import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'


class Record extends Component {

    render() {
        return (
            <div className="record clearfix">
                <div className="pull-left">
                    <strong>
                        <span className="last-name">
                            {this.props.last_name},{' '}
                        </span>
                        <span className="first-name">
                            {this.props.first_name}
                        </span>
                    </strong>
                    <a href={`tel:${this.props.phone_number}`} className="phone-number">
                        {this.props.phone_number}
                    </a>
                </div>
                <div className="pull-right">
                    <a
                        href="javascript:void(0);"
                        className="btn btn-blue"
                    >
                        Update
                    </a>
                    <a
                        href="javascript:void(0);"
                        className="btn btn-blue"
                    >
                        Delete
                    </a>
                </div>
            </div>

        )
    }
}
Record.defaultProps = {
    id: "0123456789",
    first_name: "First",
    last_name: "Last",
    phone_number: "555-555-5555"
};
Record.propTypes = {
    id: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
}

export default Record
