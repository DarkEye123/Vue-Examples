import Vue from 'vue';
import App from './App.vue';

Vue.directive('highlight', {
    bind(el, binding, vnode) {
        if (binding.arg == 'textColor') {
            el.style.color = binding.value;
        } else {
            if (!binding.value) {
                el.style.backgroundColor = 'lightgreen';
            } else {
                el.style.backgroundColor = binding.value;
            }
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
});