<template>
    <div class="container">
        <div class="content">
            <div class="title">ABOUT ME</div>
            <div class="me" v-html="me"></div>
            <div class="add">{{ add }}</div>
            <!-- <div class="go">{{ go }}</div> -->
            <div class="go" v-html="go"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                me: "<b>Hi, I'm Gunner Clark.</b> I bring ideas to life through the mediums of web design and webXR development.",
                add: "When I'm not building websites or XR experiences, I'm sharing my knowledge and discoveries in health and fitness.",
                go: "To find out what I'm currently working on, or even just what's on my mind, you can find out <a href='https://garden.theinept.dev/' target='_blank' title='digital garden'>here</a>  on my personal blog.",
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
.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;    
    text-align: center;
    height: auto;
    min-height: 25rem;
}
.content > * {
    padding: 0.6rem;
}
.content > * .title {
    padding-bottom: 0;
}
.title {
    font-size: 2.5rem;
    text-transform: uppercase;
    /* padding-top: 2.5rem; */
    /* padding-bottom: 3rem; */
}
.me, .add, .go {
    max-width: 50rem;
    /* prevents the width from being 100% on mobile / smaller screens */
    width: 95%;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.25rem;
    justify-content: space-around;
    line-height: 2rem;
}
.go :is(a:link, a:visited, a:hover) {
    color: rgb(255, 255, 255);
    transition: 0.15s ease-in-out;
}
@media only screen and (min-width: 768px) {
    /* .content {
        min-height: 25rem;
    } */
    .go :is(a:hover) {
        color: rgb(134, 212, 126);
    }
}
</style>