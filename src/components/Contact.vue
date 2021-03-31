<template>
    <div class="container">
        <div class="title">Get In Touch</div>
        <a class="email" href="mailto:contact@gunnerclark.dev?subject=Get In Touch" target="_blank">contact@gunnerclark.dev</a>
        <div class="links">
            <a href="https://twitter.com/theineptdev" target="_blank" class="twitter">Twitter</a>
            <a href="https://www.linkedin.com/in/gunnerclark" target="_blank" class="linkedin">LinkedIn</a>
            <a href="https://github.com/theineptdev" target="_blank" class="github">GitHub</a>
            <a href="https://garden.gunnerclark.dev/" target="_blank" class="garden">Blog</a>
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
    text-decoration: none;
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
    text-decoration: none;
    color: white;
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