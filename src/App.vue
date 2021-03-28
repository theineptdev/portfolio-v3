<template>
  <div id="app">
    <div class="btn-nav" @click="toggleNav()">
      <fa-ico class="bars" icon="bars" />
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
      this.$store.commit("toggleNav");
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
  color: black;
  position: fixed;
  top: 1em;
  right: 1em;
  border: none;
  font-size: 2em;
  padding: 0;
  display: flex; /* makes icon & div correct size */
}

.btn-nav:hover {
  color: rgb(187, 42, 42);
  cursor: pointer;
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
