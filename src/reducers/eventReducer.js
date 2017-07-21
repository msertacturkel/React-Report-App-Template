/**
 * Created by sertac.turkel on 21/07/2017.
 */
const eventReducer = (state = {
    click: false
}, action) => {
    switch (action.type) {
        case "CLICK_EVENT":
            state = {
                ...state,
                click: !state.click
            };

            break;
        default:
            break;
    }
    return state;
};

export default eventReducer;