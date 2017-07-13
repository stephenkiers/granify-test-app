import { Map, Set } from 'immutable'

export const app_state_constants = {
    APP_STATE_SET_MODAL_TYPE_ID: 'APP_STATE_SET_MODAL_TYPE_ID',
};


const app_state = function(state = Map(), action) {
    switch (action.type) {
        case app_state_constants.APP_STATE_SET_MODAL_TYPE_ID:
            return state.update('modal_id', action.id)

        default:
            return state;
    }
};


export default app_state;

export const getModalId = state =>
    state.get('modal_id');