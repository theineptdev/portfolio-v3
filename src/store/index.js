import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navBoolean: true,
    navIco: 'bars',
  },
  mutations: {
    toggleNav() {
      if (this.state.navBoolean) {
        // document.getElementsByClassName('top')[0]
        //   .style.visibility = 'hidden';
        document.querySelectorAll('*')[0].style.overflowY = 'hidden';
        document.getElementsByClassName('top')[0]
          .style.opacity = '0%';
        document.getElementsByClassName('navi')[0]
          .style.visibility = 'visible';
        document.getElementsByClassName('navi')[0]
          .style.opacity = '100%';
        this.state.navIco = 'times';
        this.state.navBoolean = !this.state.navBoolean
      } else {
        // document.getElementsByClassName('top')[0]
        //   .style.visibility = 'visible';
        document.querySelectorAll('*')[0].style.overflowY = 'visible';
        document.getElementsByClassName('top')[0]
          .style.opacity = '100%';
        document.getElementsByClassName('navi')[0]
          .style.visibility = 'hidden';
        document.getElementsByClassName('navi')[0]
          .style.opacity = '0%';
        this.state.navIco = 'bars';
        this.state.navBoolean = !this.state.navBoolean
      }
    },
    navTo(state, section) {
      document.getElementById(section).scrollIntoView({
        behavior: 'smooth'});
      // setTimeout(function() {
      //   document.getElementById(section).scrollIntoView({
      //     behavior: 'smooth'});
      // }, 50);
    }
  },
  actions: {},
  modules: {},
  getters: {
    navIco: (state) => {
      return state.navIco;
    }
  }
});
