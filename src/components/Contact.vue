<template>
    <div class="container">
        <div class="title">Get In Touch</div>
        <div class="email-container">
            <a class="email" href="mailto:contact@gunnerclark.dev?subject=Website: [Your Subject]" target="_blank">contact@gunnerclark.dev</a>
        </div>
        <div class="links">
            <a href="https://twitter.com/theineptdev" target="_blank" title="Twitter" class="twitter">Twitter</a>
            <a href="https://www.linkedin.com/in/gunnerclark" target="_blank" title="LinkedIn" class="linkedin">LinkedIn</a>
            <a href="https://github.com/theineptdev" target="_blank" title="GitHub" class="github">GitHub</a>
            <a href="https://garden.gunnerclark.dev/" target="_blank" title="Garden" class="garden">Garden</a>
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
    font-size: 2.25rem;
    text-transform: uppercase;
}
.email-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* max-width: 30rem; */
    padding: 2rem;
}
.email {
    text-decoration: none;
    /* maintains 2.75rem font size until viewport is too small */
    font-size: min(7vw, 2.75rem);
    color: rgb(112, 112, 112);
    transition: 0.15s ease-in-out;
    cursor: pointer;
}
.links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 100%;
    max-width: 30rem;
}
.links a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
    transition: 0.15s ease-in-out;
    cursor: pointer;
}

@media only screen and (min-width: 768px) {
    .email:hover {
        color: white;
    }
    .twitter:hover {
        color: rgb(73, 167, 255);
    }
    .linkedin:hover {
        color: rgb(52, 147, 255);
    }
    .github:hover {
        color: rgb(207, 96, 221);
    }
    .garden:hover {
        color: rgb(134, 212, 126);
    }
}
</style>