import { Map } from 'immutable'

export default Map({
    app_state: Map({
        modal_id: undefined,
    }),
    records: Map({
        byId: Map({
            "0123456789": Map({
                state: 'idle',
                id: "0123456789",
                first_name: "test",
                last_name: "user",
                phone_number: "555-555-5555"
            })
        }),
    }),
})