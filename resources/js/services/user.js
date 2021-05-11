import { http } from "./http";

export function getIndex(data) {
    return http().get('/')
        .then(response => {
            console.log(response);
            return response.data;
        });
}
