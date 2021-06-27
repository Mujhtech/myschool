import { http } from "./http";

export function getSetting() {
    return http().get('/setting')
        .then(response => {
            console.log(response);
            return response.data;
        });
}
