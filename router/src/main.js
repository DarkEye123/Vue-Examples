import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {
    routes
} from './routing';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {
                selector: to.hash
            };
        }
        return {
            x: 0,
            y: 0
        };
    }
});

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');