import axios from "axios";

axios.defaults.baseURL = "http://localhost:8020/";
// 请求响应拦截
axios.interceptors.request.use(
    (config) => {
        let token = window.localStorage.getItem("my-token");
        if (token) {
            config.headers["authorization"] = "bearer " + token;
        }
        return config;
    },
    (err) => {
        console.log(err);
    }
);
// 响应拦截
axios.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        console.log(err);
    }
);
export default axios
