import {app_state_constants} from "./app_state_reducers";


export const reduxAppStateSetModalId = id => ({
    type: app_state_constants.APP_STATE_SET_MODAL_TYPE_ID,
    id,
});