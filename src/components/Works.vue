<template>
    <div class="container">
        <div class="title">GitHub Repo</div>
        <div v-for="n in 4" :key="n">
            <div class="repo-ref">
            <div class="repo-title">webapp-title</div>
            <div class="repo-lang">javascript</div>
            <div class="repo-desc">Description of the project in this GitHub repository. What it’s purpose is.</div>
        </div>
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
    background: #181818;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.title {
    font-size: 2.5em;
    text-transform: uppercase;
    padding: 2em;
}

.repo-ref {
    margin: 0 auto;
    max-width: 35em;
    padding-bottom: 2.5em;
}
.repo-title {
    border: 1px solid red;
    font-size: 1.75em;
    text-transform: lowercase;
    display: inline-flex;
}
.repo-lang {
    border: 1px solid red;
    font-size: 1.75em;
    font-variant: small-caps;
    color: rgb(126, 126, 126);
    display: inline-flex;
}
.repo-desc {
    border: 1px solid red;
    font-size: 1.25em;
    color: rgb(90, 90, 90);
}
</style>