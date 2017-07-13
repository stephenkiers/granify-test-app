import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.onChange = (e) => {
            this.props.onChange(e.target.value)
        }
    }
    render() {
        return (
            <div className="text-input">
                <input
                    type="text"
                    value={this.props.value}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}
TextInput.defaultProps = {
    value: "",
};
TextInput.propTypes = {
    value: PropTypes.string,
    id:PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    tab_index: PropTypes.number.isRequired,
}

export default TextInput
