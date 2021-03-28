<template>
    <div class="container">
        <div class="buffer"></div>
        <div class="sections">
            <a class="about" @click="navTo('about'), toggleNav()">about</a>
            <a class="works" @click="navTo('works'), toggleNav()">works</a>
            <a class="contact" @click="navTo('contact'), toggleNav()">contact</a>
        </div>
        <div class="links">
            <a class="twitter">
                <fa-ico class="fa-ico" :icon="['fab', 'twitter']" title="Twitter" />
            </a>
            <a class="linkedin">
                <fa-ico class="fa-ico" :icon="['fab', 'linkedin']" title="LinkedIn" />
            </a>
            <a class="github">
                <fa-ico class="fa-ico" :icon="['fab', 'github']" title="GitHub" />
            </a>
            <a class="garden">
                <fa-ico class="fa-ico" :icon="['fab', 'twitter']" title="Garden" />
            </a>
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

.buffer {
    height: calc((100vh - 10rem)/2);
}

.sections {
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 3em;
    text-transform: lowercase;
    height: 10rem; /*rough estimate of selection height */
    cursor: pointer;
}
.sections a:hover {
    color: rgba(255, 255, 255, 0.452);
}

.links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: calc((100vh - 10rem)/2);
}

.links a {
    /* position: absolute; */
    /* transform maintains translation relative to center */
    color: white;
    font-size: 2em;
    padding-left: 1em;
    padding-right: 1em;
}

.fa-ico {
    cursor: pointer;
}

.twitter .fa-ico:hover {
    color: rgb(109, 184, 255);
}
.linkedin .fa-ico:hover {
    color: rgb(105, 88, 255);
}
.github .fa-ico:hover {
    color: rgb(221, 110, 255);
}
.garden .fa-ico:hover {
    color: rgb(83, 218, 70);
}
</style>