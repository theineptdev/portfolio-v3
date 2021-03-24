<template>
  <div id="app">
    <top />
    <about />
    <works />
    <contact />
  </div>
</template>

<script>
import top from "./components/Top.vue";
import about from "./components/About.vue";
import works from "./components/Works.vue";
import contact from "./components/Contact.vue";

export default {
  name: "App",
  components: {
    top,
    about,
    works,
    contact
  },
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
</style>
