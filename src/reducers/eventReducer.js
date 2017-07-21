/**
 * Created by sertac.turkel on 21/07/2017.
 */
const eventReducer = (state = {
    click: false,
    don:false
}, action) => {
    switch (action.type) {
        case "CLICK_EVENT":
            state = {
                ...state,
                click: !state.click
            };
            break;
        case "DON_BEBEK":
            state = {
                ...state,
                don: !state.don
            };
            break;
        default:
            break;
    }
    return state;
};

export default eventReducer;