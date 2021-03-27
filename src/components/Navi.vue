<template>
    <div class="container">
        <div class="btn-close">X</div>
        <div class="sections">
            <div class="about">about</div>
            <div class="works">works</div>
            <div class="contact">contact</div>
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
    border: 2px solid red;
}
</style>