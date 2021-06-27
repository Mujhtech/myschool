import { combineReducers, createStore } from "redux";
import { userReducer } from "./user";
import { settingReducer } from "./setting";

const reducers = combineReducers({
    user: userReducer,
    setting: settingReducer
});

export const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
