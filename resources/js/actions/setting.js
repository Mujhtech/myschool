import {Constant} from "../constant";

export const setSetting = (payload) => {
    return {
        type: Constant.SET_APP_SETTING,
        payload: payload
    }
}

