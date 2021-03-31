<template>
    <div class="container">
        <div class="btns">
            <div class="upper"></div>
            <div class="lower">
                <div class="btn-more" @click="toggleMore('200vh')">show more</div>
                <div class="btn-less" @click="toggleMore('100vh')">show less</div>
                |
                <div class="btn-github">visit github</div>
            </div>
        </div>
        <div class="repo-container">
            <div class="title">GitHub Repo</div>
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
                document.getElementsByClassName('upper')[0]
                    .style.height = 'calc(' + height + ' - 5rem)';
                if (height === '200vh') {
                    document.getElementsByClassName('btn-less')[0]
                        .style.display = 'flex';
                    document.getElementsByClassName('btn-more')[0]
                        .style.display = 'none';
                } else {
                    document.getElementsByClassName('btn-less')[0]
                        .style.display = 'none';
                    document.getElementsByClassName('btn-more')[0]
                        .style.display = 'flex';
                }
                console.log(height);
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
    /* smooth transitions for elements within container */
    transition: 0.5s ease-in-out;
}

.btns {
    pointer-events: none;
    position: absolute;
    width: 100%;
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
}
.upper {
    height: calc(100vh - 5rem);
    transition: 0.5s ease-in-out;
}
.lower {
    pointer-events: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    /* background: rgb(24, 24, 24); */
    background-image: linear-gradient(
        to bottom,
        rgb(24, 24, 24, 0) 0%,
        rgb(24, 24, 24) 35%
    );
    color: rgba(255, 255, 255, 0.438);
}
.btn-less {
    display: none;
}
.btn-more, .btn-less, .btn-github {
    padding-left: 1rem;
    padding-right: 1rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
}
:is(.btn-more, .btn-less, .btn-github):hover {
    color: white;
}

.repo-container {
    height: 100vh;
    overflow: hidden;
    transition: 0.5s ease-in-out;
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