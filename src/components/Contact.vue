<template>
    <div class="container">
        <div class="title">Get In Touch</div>
        <div class="email">contact@gunnerclark.dev</div>
        <div class="links">
            <a class="twitter">Twitter</a>
            <a class="linkedin">LinkedIn</a>
            <a class="github">GitHub</a>
            <a class="garden">Blog</a>
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
    transition: 0.15s ease-in-out;
    cursor: pointer;
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
    transition: 0.15s ease-in-out;
    cursor: pointer;
}

@media only screen and (min-width: 768px) {
    .email:hover {
        color: white;
    }

    .twitter:hover {
        color: rgb(109, 184, 255);
    }
    .linkedin:hover {
        color: rgb(105, 88, 255);
    }
    .github:hover {
        color: rgb(221, 110, 255);
    }
    .garden:hover {
        color: rgb(83, 218, 70);
    }
}
</style>