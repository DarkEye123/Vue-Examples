import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// this will be visible 3 times in total, (Filter.vue, App.vue and Vue instance from 13 line)
// applies for __ALL__ Vue instances
// usable e.g. when developing 3rd party sw. 
Vue.mixin({
    created() {
        console.log("global mixin");
    }
});

new Vue({
    render: h => h(App)
}).$mount('#app');