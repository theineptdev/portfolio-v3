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
  },
  created() {
    document.title = "inept";
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
* {
  font-family: 'Montserrat', sans-serif;
  padding: 0;
  margin: 0;
  /* solves mobile scaling issue, but still don't know the cause... */
  overflow-x: hidden;-webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge, Opera and Firefox */
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}

::-webkit-scrollbar {
  display: none;
}

.btn-nav {
  z-index: 3;
  /* color: rgb(105, 105, 105); */
  color: rgba(255, 255, 255, 0.75);
  mix-blend-mode: difference; /* keep button visible */
  position: fixed;
  top: 1.5em;
  right: 1.5em;
  border: none;
  font-size: 1.5em;
  padding: 0;
  display: flex; /* makes icon & div correct size */
  width: 1em;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.15s ease-in-out;
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
  color: rgb(105, 105, 105);
  mix-blend-mode: difference; /* keep button visible */
  cursor: pointer;
  transition: 0.15s ease-in-out;
}

.navi {
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  transition: 0.15s ease-in-out;
}

.top {
  visibility: visible;
  opacity: 1;
  transition: 0.15s ease-in-out;
}

@media only screen and (min-width: 768px) {
  .btn-nav:hover {
    color: rgba(255, 255, 255, 0.25);
  }
  
  .down-ico:hover {
    color: white;
  }
}
</style>
