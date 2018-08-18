import Vue from 'vue';
import App from './App.vue';

// Note that setTimeout delays styling even if there is delay = 0. It is not the best performance solution. Only example
Vue.directive('highlight', {
    bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers['delayed']) {
            delay = 3000;
        }
        setTimeout(() => {
            if (binding.arg == 'textColor') {
                el.style.color = binding.value;
            } else {
                if (!binding.value) {
                    el.style.backgroundColor = 'lightgreen';
                } else {
                    el.style.backgroundColor = binding.value;
                }
            }

        }, delay);
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
});