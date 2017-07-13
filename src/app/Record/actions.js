import {record_constants} from './records_reducers'
import {reduxAppStateSetModalId} from "../AppState/actions";
import faker from 'faker';
import {generateRandomUUID} from "../utils";

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

export const apiRecordGetLatest = () => {
    return dispatch => {
        setTimeout(() => {
            // GET 'v1/records'

            // this is not an ideal seed file, but I don't think it needs to be
            // optimized for this test, as a backend would really be used
            let testData = []
            Array.from(new Array(10)).forEach(i => {
                testData.push({
                    id: generateRandomUUID(),
                    first_name: faker.name.firstName(),
                    last_name: faker.name.lastName(),
                    phone_number: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
                    created_at: (new Date).getTime() - Math.floor(Math.random() * 1000)
                })
            })
            testData.forEach(result => {
                dispatch(reduxRecordAdd(
                    result.id,
                    result.first_name,
                    result.last_name,
                    result.phone_number,
                    result.created_at
                ));
            })
        }, 500)
    }
}


export const apiRecordUpdate = (id, first_name, last_name, phone_number, created_at) => {
    return dispatch => {
        dispatch(reduxRecordUpdateState(id, 'saving'))
        setTimeout( () => {
            //This should be a fetch promise to send attributes to backend.
            // In practice, there would be a catch when/if there are errors
            // POST `v1/records/${id}`
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
            // DELETE `v1/records/${id}`
            dispatch(reduxRecordDelete(id));
            dispatch(reduxAppStateSetModalId(undefined));
        }, 1000);
    }
}