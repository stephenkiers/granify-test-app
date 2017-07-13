import {record_constants} from './records_reducers'
import {reduxAppStateSetModalId} from "../AppState/actions";

const reduxRecordAdd = (id, first_name, last_name, phone_number, created_at) => ({
    type: record_constants.RECORD_UPDATE,
    id,
    first_name,
    last_name,
    phone_number,
    created_at,
});
const reduxRecordDelete = id => ({
    type: record_constants.RECORD_DELETE,
    id
})
const reduxRecordUpdateState = (id, state) => ({
    type: record_constants.RECORD_UPDATE_STATE,
    id,
    state,
});

export const apiRecordUpdate = (id, first_name, last_name, phone_number, created_at) => {
    return dispatch => {
        dispatch(reduxRecordUpdateState(id, 'saving'))
        setTimeout( () => {
            //This should be a fetch promise to send attributes to backend.
            // In practice, there would be a catch when/if there are errors
            created_at = created_at || (new Date).getTime();
            dispatch(reduxRecordAdd(id, first_name, last_name, phone_number, created_at));
            dispatch(reduxRecordUpdateState(id, 'idle'));
            dispatch(reduxAppStateSetModalId(undefined));
        }, 2000);
    }
}
export const apiRecordDelete = id => {
    return dispatch => {
        dispatch(reduxRecordUpdateState(id, 'deleting'))
        setTimeout( () => {
            //This should be a fetch promise to send attributes to backend.
            // In practice, there would be a catch when/if there are errors
            dispatch(reduxRecordDelete(id));
            dispatch(reduxAppStateSetModalId(undefined));
        }, 1000);
    }
}