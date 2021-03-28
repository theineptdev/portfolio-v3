<template>
  <div id="app">
    <div class="btn-nav" @click="toggleNav()">
      <fa-ico :icon="['fa', this.navIco]" />
    </div>
    <div class="down-arrow">
      <fa-ico class="down-ico" @click="navTo('about')" :icon="['fas', 'chevron-down']" />
    </div>
    <navi class="navi" />
    <top class="top" />
    <about id="about"/>
    <works id="works"/>
    <contact id="contact"/>
  </div>
</template>

<script>
import navi from "./components/Navi.vue";
import top from "./components/Top.vue";
import about from "./components/About.vue";
import works from "./components/Works.vue";
import contact from "./components/Contact.vue";

export default {
  name: "App",
  data() {
    return {
    }
  },
  components: {
    navi,
    top,
    about,
    works,
    contact
  },
  methods: {
    toggleNav() {
      this.navIco = this.navClose;
      this.$store.commit("toggleNav");
    },
    navTo(section) {
        this.$store.commit("navTo", section);
    },
  },
  computed: {
    navIco: {
      get() {
        return this.$store.state.navIco;
      },
      set() {
        // vue wanted a setter to exist despite it not ne necessary in this scenario
        return
      }
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
* {
  font-family: 'Montserrat', sans-serif;
  padding: 0;
  margin: 0;
}

::-webkit-scrollbar {
  display: none;
}

.btn-nav {
  z-index: 2;
  color: white;
  mix-blend-mode: difference; /* keep button visible */
  position: fixed;
  top: 1.5em;
  right: 1.5em;
  border: none;
  font-size: 1.5em;
  padding: 0;
  display: flex; /* makes icon & div correct size */
  border: 1px solid red;
  width: 1em;
  justify-content: center;
  align-items: center;
}

.btn-nav:hover {
  color: rgb(187, 42, 42);
  cursor: pointer;
}


.down-arrow {
  width: 100%;
  display: grid;
  place-items: center;
  position: absolute;
  bottom: 0.5em;
  font-size: 2em;
}

.down-ico {
  z-index: 2;
  color: white;
  mix-blend-mode: difference; /* keep button visible */
  border: 1px solid red;
}
.down-ico:hover {
  color: red;
}

.navi {
  z-index: 1;
  visibility: hidden;
  opacity: 0%;
  transition: visibility 0s linear 0s, opacity 300ms;
}

.top {
  visibility: visible;
  opacity: 100%;
  transition: visibility 0s linear 0s, opacity 300ms;
}
</style>
