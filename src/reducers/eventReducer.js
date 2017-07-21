/**
 * Created by sertac.turkel on 21/07/2017.
 */
const eventReducer = (state = {
    click: false,
    selectReportClick:false
}, action) => {
    switch (action.type) {
        case "CLICK_EVENT":
            state = {
                ...state,
                click: !state.click
            };
            break;
        case "SELECT_REPORT_EVENT":
            state = {
                ...state,
                selectReportClick: !state.selectReportClick
            };
            break;
        default:
            break;
    }
    return state;
};

export default eventReducer;