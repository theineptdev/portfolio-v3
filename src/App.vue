<template>
  <div id="app">
    <button class="btn-nav" @click="toggleNav()">NAV</button>
    <navi class="navi" />
    <top class="top" />
    <about />
    <works />
    <contact />
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
      console.log(this.$store.state.navBoolean)
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
  z-index: 1;
  color: black;
  background: white;
  position: fixed;
  right: 0;
}

.navi {
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
