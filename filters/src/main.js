import Vue from 'vue'
import App from './App.vue'

// Filter that is globally registered
Vue.filter("filter-amp", (data) => {
    return data.replace(/amp/gi, "");
})

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app')