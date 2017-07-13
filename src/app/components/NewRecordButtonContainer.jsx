import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import NewRecordButton from "./NewRecordButton";
import {reduxAppStateSetModalId} from "../AppState/actions";


class NewRecordButtonContainer extends Component {
    constructor(props) {
        super(props)

        this.onClick = e => {
            e.preventDefault();
            const time_id = (new Date).getTime().toString(36);
            const length_needed = 10-time_id.length;
            const pad_chacters = Math.floor(Math.random()*123456789).toString(36).substring(0, length_needed);
            this.props.setModalId(`${time_id}${pad_chacters}`)
        }
    }
    render() {
        return (
            <NewRecordButton
                onClick={this.onClick}
            />
        )
    }
}
NewRecordButtonContainer.defaultProps = {
};
NewRecordButtonContainer.propTypes = {
}


const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    setModalId(id) {
        dispatch(reduxAppStateSetModalId(id))
    }
});



export default connect(mapStateToProps, mapDispatchToProps)(NewRecordButtonContainer)