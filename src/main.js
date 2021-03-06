import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAudio from 'vue-audio-better'
import VueWaveSurfer from 'vue-wave-surfer'

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

Vue.use(VueWaveSurfer)

Vue.use(VueAudio);