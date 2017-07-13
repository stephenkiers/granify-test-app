import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TelephoneInput extends Component {
    constructor(props) {
        super(props);
        this.onChange = (e) => {
            this.props.onChange(e.target.value.replace(/\D/g,"").substring(0, 10))
        }
        this.formatTelephoneNumber = () => {
            const {value} = this.props;
            if (value.length < 4) {
                return value
            } else if (value.length < 7) {
                return this.props.value.replace(/(\d{3})(\d*)/, '$1-$2');
            } else {
                return this.props.value.replace(/(\d{3})(\d{3})(\d*)/, '$1-$2-$3');
            }
        }
    }
    render() {
        return (
            <div className="text-input">
                <label className="text-label">
                    {this.props.label}
                </label>
                <input
                    type="text"
                    className="form-input"
                    value={this.formatTelephoneNumber()}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}
TelephoneInput.defaultProps = {
    value: "",
};
TelephoneInput.propTypes = {
    value: PropTypes.string,
    id:PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    tab_index: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
}

export default TelephoneInput
