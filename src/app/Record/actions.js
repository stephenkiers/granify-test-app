import {record_constants} from './records_reducers'

const reduxRecordAdd = (id, first_name, last_name, phone_number) => ({
    type: record_constants.RECORD_ADD,
    id,
    first_name,
    last_name,
    phone_number,
    created_at,
});
const reduxRecordUpdateState = (id, state) => ({
    type: record_constants.RECORD_UPDATE_STATE,
    state,
});



export const apiRecordAdd = (id, first_name, last_name, phone_number, created_at) => {
    return dispatch => {
        dispatch(reduxRecordUpdateState(id, 'saving'))

        setTimeout( () => {
            created_at = created_at || (new Date).getTime();
            dispatch(reduxRecordUpdateState(id, 'idle'));
            dispatch(reduxRecordAdd(id, first_name, last_name, phone_number, created_at));
        }, 2000);

    }
}