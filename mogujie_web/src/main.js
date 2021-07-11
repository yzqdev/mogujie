import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../public/css/global.css";
import "../public/font/font_xn7gg6ug1r/iconfont.css";
import axios from "@/util/axios";
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

Vue.prototype.$http = axios;
Vue.prototype.$qs = qs;

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
