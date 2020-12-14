import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import optionDB from "./utils/requests"
Vue.use(uView);

Vue.prototype.$optionDB=optionDB
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
