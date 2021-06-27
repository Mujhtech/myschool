import { Constant } from "../constant"

const initState = {
    setting: {}
}
export const settingReducer = (state = initState, {type, payload}) => {
    switch (type){
        case Constant.SET_APP_SETTING:
            return {...state, setting: payload}
        default:
            return state;
    }
}
