import Vue from 'vue'
import App from './App.vue'
import vueFinger from './components/vue-finger'
Vue.config.productionTip = false

Vue.use(vueFinger)
new Vue({
    render: h => h(App),
}).$mount('#app')
