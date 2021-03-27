<template>
    <div class="container">
        <div class="sections">
            <div class="about" @click="navTo('about'), toggleNav()">about</div>
            <div class="works" @click="navTo('works'), toggleNav()">works</div>
            <div class="contact" @click="navTo('contact'), toggleNav()">contact</div>
        </div>
        <div class="links">
            <div class="twitter">T</div>
            <div class="linkedin">T</div>
            <div class="github">T</div>
            <div class="gardeb">T</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            toggleNav() {
                this.$store.commit("toggleNav");
            },
            navTo(section) {
                this.$store.commit("navTo", section);
            }
        }
    }
</script>

<style scoped>
.container {
    color: white;
    background-color: black;
    position: fixed;
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
}

.sections {
    position: absolute;
    border: 1px solid red;
    color: white;
    font-size: 3em;
    text-transform: lowercase;
    text-align: center;
}

.links {
    position: absolute;
    /* transform maintains translation relative to center */
    transform: translateY(15em);
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
}
</style>