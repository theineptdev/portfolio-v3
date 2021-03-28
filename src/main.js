import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faTimes, faChevronDown, faTwitter, faLinkedinIn, faGithub)

Vue.component('fa-ico', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
