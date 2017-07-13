import { record_constants } from './records_reducers'
import { Map } from 'immutable'

const city = (state = Map(), action) => {
    switch (action.type) {
        case record_constants.RECORD_ADD:
            return state.merge(Map({
                id: action.id,
                first_name: action.first_name,
                last_name: action.last_name,
                phone_number: action.phone_number,
            }));
        case record_constants.RECORD_UPDATE_STATE:
            return state.merge(Map({
                id: action.id,
                state: action.state,
            }));

        default:
            return state;
    }
}
export default city