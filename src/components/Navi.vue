<template>
    <div class="container">
        <div class="buffer"></div>
        <div class="sections">
            <a class="about" @click="navTo('about'), toggleNav()">about</a>
            <a class="works" @click="navTo('works'), toggleNav()">works</a>
            <a class="contact" @click="navTo('contact'), toggleNav()">contact</a>
        </div>
        <div class="links">
            <a href="https://twitter.com/theineptdev" target="_blank" class="twitter">
                <fa-ico class="fa-ico" :icon="['fab', 'twitter']" title="Twitter" />
            </a>
            <a href="https://www.linkedin.com/in/gunnerclark" target="_blank" class="linkedin">
                <fa-ico class="fa-ico" :icon="['fab', 'linkedin']" title="LinkedIn" />
            </a>
            <a href="https://github.com/theineptdev" target="_blank" class="github">
                <fa-ico class="fa-ico" :icon="['fab', 'github']" title="GitHub" />
            </a>
            <a href="https://garden.gunnerclark.dev/" target="_blank" class="garden">
                <div class="fa-ico" title="Garden">
                    <div class="garden-ico" />
                </div>
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
    font-size: 3em;
    text-transform: lowercase;
    /*rough estimate of selection height */
    /* height: 10rem; */
    cursor: pointer;
}
.sections a {
    transition: 0.15s ease-in-out;
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
    font-size: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    cursor: auto;
}

.fa-ico {
    cursor: pointer;
    transition: 0.15s ease-in-out;
}

.garden {
}

.garden-ico {
    height: 2rem;
    /* content: url('../assets/icons/theineptdevLogoInvFullHollow.png'); */
    content: url('../assets/icons/gardenLogoInvFullNoFlipHollow.png');
    filter: grayscale(100) brightness(2);
    transition: 0.15s ease-in-out;
}

@media only screen and (min-width: 768px) {
    .sections a:hover {
        color: rgba(255, 255, 255, 0.452);
    }
    
    .twitter .fa-ico:hover {
        color: rgb(73, 167, 255);
    }
    .linkedin .fa-ico:hover {
        color: rgb(52, 147, 255);
    }
    .github .fa-ico:hover {
        color: rgb(235, 87, 255);
    }
    .garden .fa-ico:hover {
        color: rgb(83, 218, 70);
    }
    .garden-ico:hover {
        /* content: url('../assets/icons/gardenLogoInvFullNoFlipHollow.png'); */
        filter: grayscale(0) brightness(1);
    }
}
</style>