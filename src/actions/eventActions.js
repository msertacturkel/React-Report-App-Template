/**
 * Created by sertac.turkel on 21/07/2017.
 */
export function clickEvent(){
    return {
        type:"CLICK_EVENT"
    };
}
export function selectReportEvent(){
    return {
        type:"SELECT_REPORT_EVENT"
    };
}

export function selectedReport(selectedReportFromCombobox){
    return {
        type:"SELECTED_REPORT_FROM_COMBOBOX",
        payload:selectedReportFromCombobox
    };
}