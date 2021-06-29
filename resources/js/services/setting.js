import { http } from "./http";

export function getSetting() {
    return http().get('/setting')
        .then(response => {
            return response.data;
        });
}
