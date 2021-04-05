<template>
    <div class="container">
        <div class="title-container">
            <div class="title">the inept dev</div>
        </div>
        <canvas class="webgl"></canvas>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                normalTexture: require('../assets/textures/NormalMap.png'),
            }
        },
        methods: {
        },
        mounted() {
            this.$store.commit("threeInit")
            //this.animate()
            //this.loader();
        },
    }
</script>

<style scoped>
* {
    /* no select */
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}
.webgl {
    position: absolute;
    top: 0;
    left: 0;
    outline: none;
    mix-blend-mode: difference;
}
.title-container {
    /* background: white; */
    height: 100vh;
    display: grid;
    place-items: center;
}
.container {
    height: 100vh;
    width: 100%;
    /* remove background to remove color */
    /* background: rgb(216, 58, 58); */
}
.title {
    color: white;
    /* will invert title color and background colors */
    /* mix-blend-mode: difference;  */
    font-size: 3em;
    text-transform: lowercase;
}
</style>