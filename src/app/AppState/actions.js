import {app_state_constants} from "./app_state_reducers";


export const reduxAppStateSetModalId = id => ({
    type: app_state_constants.APP_STATE_SET_MODAL_TYPE_ID,
    id,
});
export const reduxAppStateUpdateStats = (total_records, avg_per_hour, records_last_hour_ratio) => ({
    type: app_state_constants.APP_STATE_UPDATE_STATS,
    total_records,
    avg_per_hour,
    records_last_hour_ratio,
});

let total_records_cache = 125,
    records_last_hour_ratio_cache = 0;

export const apiGetStatsUpdate = () => {
    return dispatch => {
        setTimeout(() => {
            // GET 'v1/records/stats'
            // this would be better using websockets, but I illustrated with simple polling
            const fake_records_change = (Math.floor(Math.random() * 5) + 1) - 2
            dispatch(reduxAppStateUpdateStats(
                total_records_cache + fake_records_change,
                3.02,
                records_last_hour_ratio_cache + fake_records_change
            ));
        }, 500)
    }
}