<template>
    <div class="container">
        <div class="title">ABOUT</div>
        <div class="content">
            <div class="me">{{ me }}</div>
            <div class="add">{{ add }}</div>
            <div class="go">{{ go }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                me: "I'm a front-end web developer who design websites and web apps. Striving to improve my skillset in the XR industry through the medium of WebXR.",
                add: "When I'm not building websites or XR experiences, I'm learning and applying health and fitness concepts to find the path of least resistance to help others achieve their goals.",
                go: "To find out what I'm currently working on or even just what's on my mind, you can find out at here my digital garden.",
            }
        }
    }
</script>

<style scoped>
.container {
    color: white;
    background: #101010;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    text-align: center;
}
.title {
    font-size: 2.5rem;
    text-transform: uppercase;
    /* padding-bottom: 3rem; */
}
.content {
    max-width: 50rem;
    /* prevents the width from being 100% on mobile / smaller screens */
    width: 95%;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.25rem;
    line-height: 2rem;
}
.content > * {
    padding-top: 2rem;
}

</style>