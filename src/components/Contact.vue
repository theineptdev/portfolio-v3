<template>
    <div class="container">
        <div class="title">Get In Touch</div>
        <div class="email">contact@gunnerclark.dev</div>
        <div class="links">
            <a class="twitter">Twitter</a>
            <a class="twitter">LinkedIn</a>
            <a class="twitter">GitHub</a>
            <a class="twitter">Blog</a>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container {
    color: white;
    background: #000000;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
}
.title {
    font-size: 2.25em;
    text-transform: uppercase;
}
.email {
    font-size: 2.75em;
    color: rgb(112, 112, 112);
    padding: 0.75em;
}
.links {
    display: flex;
    flex-direction: row;
}
.links a {
    font-size: 1em;
    padding-left: 2em;
    padding-right: 2em;
    text-transform: uppercase;
}
.links a:hover {
    cursor: pointer;
}
</style>