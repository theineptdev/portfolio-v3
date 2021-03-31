<template>
    <div class="container">
        <div class="btns">
            <div class="btn-more">show more</div>
            <div class="btn-github">visit github</div>
        </div>
        <div class="repo-container">
            <div class="title" @click="toggleMore('200vh')">GitHub Repo</div>
            <div v-for="n in 8" :key="n">
            <div class="repo-ref">
                <div class="repo-title">webapp-title</div>
                <div class="repo-lang">javascript</div>
                <div class="repo-desc">Description of the project in this GitHub repository. What it’s purpose is.</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            toggleMore(height) {
                document.getElementsByClassName('container')[3]
                    .style.height = height;
                document.getElementsByClassName('repo-container')[0]
                    .style.height = height;
                console.log('this');
            }
        }
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
    overflow: hidden;
}

.btns {
    border: 1px solid red;
    position: absolute;
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    place-content: center;
}

.repo-container {
    height: 100vh;
    overflow: hidden;
    border: 1px solid red;
}

.title {
    font-size: 2.5em;
    text-transform: uppercase;
    padding: 1.75em;
}

.repo-ref {
    margin: 0 auto;
    max-width: 35em;
    padding-bottom: 2.5em;
    line-height: 2em;
    cursor: pointer;
}
.repo-title {
    font-size: 1.75em;
    text-transform: lowercase;
    display: inline-flex;
    padding-right: 0.175em;
}
.repo-lang {
    font-size: 1.75em;
    text-transform: uppercase;
    color: rgb(126, 126, 126);
    display: inline-flex;
    padding-left: 0.175em;
}
.repo-desc {
    font-size: 1.25em;
    color: rgb(90, 90, 90);
}

@media only screen and (min-width: 768px) {
    .repo-ref:hover {
        color: yellow;
    }
}
</style>