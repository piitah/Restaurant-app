import axios from "axios";

export default () => {
    return axios.create({
        baseURL: `http://localhost:8182/`,
        headers: {
            // 'Authorization': 'Bearer Token' + store.state.token,
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    });
}
