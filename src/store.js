/**
 * Created by sertac.turkel on 21/07/2017.
 */
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import events from "./reducers/eventReducer";


export default createStore(
    combineReducers({
        events
    }),
    {},
    applyMiddleware(logger));