import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import "../public/css/global.css";
import "../public/font/font_xn7gg6ug1r/iconfont.css";
import axios from "axios";
import qs from "qs";
import alert from "@/components/common/alert/alert.js";
import VueSocketIO from "vue-socket.io";
import infinite from "@/directive/infinite";
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://localhost:8020/",
  })
);

Vue.use(alert);
Vue.use(infinite)
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);
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

Vue.prototype.$http = axios;
Vue.prototype.$qs = qs;

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
