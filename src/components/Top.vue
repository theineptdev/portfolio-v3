<template>
    <div class="container">
        <div class="title-container">
            <div class="title">the inept dev</div>
        </div>
        <canvas class="webgl"></canvas>
    </div>
</template>

<script>
/* eslint-disable */ 
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';

    export default {
        data() {
            return {
                normalTexture: require('../assets/textures/NormalMap.png'),
            }
        },
        methods: {
            init() {
                // Loading
                /*
                const textureLoader = new THREE.TextureLoader();

                const normalTexture = textureLoader.load(this.normalTexture);
                */
                // Debug
                //const gui = new dat.GUI();

                // Canvas
                const canvas = document.querySelector('canvas.webgl');

                // Scene
                const scene = new THREE.Scene();
                scene.background = new THREE.Color( 0xffffff )
                //scene.background = new THREE.Color( 0xffffff ); //background can be changed here or made alpha: true in the renderer for website default

                // Objects
                const geometry = new THREE.BoxGeometry(1, 1, 1);

                // Materials

                const material = new THREE.MeshStandardMaterial(); //"allows you to convey the real world as much as possible"
                material.metalness = 0;
                material.roughness = 1;
                //material.normalMap = normalTexture;
                material.color = new THREE.Color(0xffffff);
                //material.color = new THREE.Color(0x404040);
                
                /*
                const mat = gui.addFolder('Material');

                const materialColor = {
                    color: 0xc0c0c
                }

                mat.add(material, 'metalness').min(0).max(1).step(0.01);
                mat.add(material, 'roughness').min(0).max(1).step(0.01);

                mat.addColor(materialColor, 'color')
                    .onChange(() => {
                        material.color.set(materialColor.color);
                    })
                */

                // Mesh
                const shape = new THREE.Mesh(geometry, material);
                scene.add(shape);

                // Lights

                const pointLight = new THREE.PointLight(0xffffff);
                pointLight.position.set(0,0,1.35);
                pointLight.intensity = 0;

                scene.add(pointLight);

                /*
                const light = gui.addFolder('Light');

                light.add(pointLight.position, 'y').min(-3).max(3).step(0.01);
                light.add(pointLight.position, 'x').min(-6).max(6).step(0.01);
                light.add(pointLight.position, 'z').min(-3).max(3).step(0.01);
                light.add(pointLight, 'intensity').min(0).max(10).step(0.01);

                // const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
                // scene.add(pointLightHelper);
                */

                // Light 2
                const pointLight2 = new THREE.PointLight(0xffffff, 2);
                //const pointLight2 = new THREE.PointLight(0xff0000, 2);
                pointLight2.position.set(-1.21, 1, 2.17);
                pointLight2.intensity = 0.15

                scene.add(pointLight2);

                /*
                const light2 = gui.addFolder('Light 2');

                light2.add(pointLight2.position, 'y').min(-3).max(3).step(0.01);
                light2.add(pointLight2.position, 'x').min(-6).max(6).step(0.01);
                light2.add(pointLight2.position, 'z').min(-3).max(3).step(0.01);
                light2.add(pointLight2, 'intensity').min(0).max(10).step(0.01);

                const light2Color = {
                    color: 0xff0000
                }

                light2.addColor(light2Color, 'color')
                    .onChange(() => {
                        pointLight2.color.set(light2Color.color);
                    })

                // const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 1);
                // scene.add(pointLightHelper2);
                */

                // Light 3
                const pointLight3 = new THREE.PointLight(0xffffff, 2);
                //const pointLight3 = new THREE.PointLight(0xff0000, 2);
                pointLight3.position.set(1.21, -1, 2.17);
                pointLight3.intensity = 0.15

                scene.add(pointLight3);

                /*
                const light3 = gui.addFolder('Light 3');

                light3.add(pointLight3.position, 'y').min(-3).max(3).step(0.01);
                light3.add(pointLight3.position, 'x').min(-6).max(6).step(0.01);
                light3.add(pointLight3.position, 'z').min(-3).max(3).step(0.01);
                light3.add(pointLight3, 'intensity').min(0).max(10).step(0.01);

                const light3Color = {
                    color: 0xff0000
                }

                light3.addColor(light3Color, 'color')
                    .onChange(() => {
                        pointLight3.color.set(light3Color.color);
                    })

                // const pointLightHelper3 = new THREE.PointLightHelper(pointLight3, 1);
                // scene.add(pointLightHelper3);
                */

                /**
                * Sizes
                */
                const sizes = {
                    width: window.innerWidth,
                    height: window.innerHeight,
                };

                window.addEventListener('resize', () => {
                    // Update sizes
                    sizes.width = window.innerWidth;
                    sizes.height = window.innerHeight;

                    // Update camera
                    camera.aspect = sizes.width / sizes.height;
                    camera.updateProjectionMatrix();

                    // Update renderer
                    renderer.setSize(sizes.width, sizes.height);
                    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                });

                /**
                * Camera
                */
                // Base camera
                const camera = new THREE.PerspectiveCamera(
                    75,
                    sizes.width / sizes.height,
                    0.1,
                    100
                );
                camera.position.x = 0;
                camera.position.y = 0;
                camera.position.z = 3;
                scene.add(camera);

                // Controls
                // const controls = new OrbitControls(camera, canvas)
                // controls.enableDamping = true

                /**
                * Renderer
                */
                const renderer = new THREE.WebGLRenderer({
                    canvas: canvas,
                    alpha: false,
                });
                renderer.setSize(sizes.width, sizes.height);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

                /**
                * Animate
                */

                document.addEventListener('mousemove', onDocumentMouseMove)

                let mouseX = 0;
                let mouseY = 0;

                let targetX = 0;
                let targetY = 0;

                const windowHalfX = window.innerWidth / 2;
                const windowHalfY = window.innerHeight / 2;

                function onDocumentMouseMove(event) {
                    mouseX = (event.clientX - windowHalfX);
                    mouseY = (event.clientY -windowHalfY);
                }

                const updateShape = (event) => {
                    shape.position.y = window.scrollY * -.006;
                }

                window.addEventListener('scroll', updateShape);



                const clock = new THREE.Clock();

                const tick = () => {

                    targetX = mouseX * .001;
                    targetY = mouseY * .001;

                    const elapsedTime = clock.getElapsedTime();

                    // Update objects
                    shape.rotation.y = 0.25 * elapsedTime;
                    shape.rotation.z = 0.225 * elapsedTime;

                    shape.rotation.y += .5 * (targetX - shape.rotation.y)
                    shape.rotation.x += .05 * (targetY - shape.rotation.x)
                    shape.position.z += -.05 * (targetY - shape.rotation.x)

                    // Update Orbital Controls
                    // controls.update()

                    // Render
                    renderer.render(scene, camera);

                    // Call tick again on the next frame
                    window.requestAnimationFrame(tick);
                };

                tick();
            }
        },
        mounted() {
            this.init();
            //this.animate()
            //this.loader();
        }
    }
</script>

<style scoped>
.webgl
{
    position: absolute;
    top: 0;
    left: 0;
    outline: none;
    mix-blend-mode: difference;
}
.title-container {
    /* background: white; */
    height: 100vh;
    display: grid;
    place-items: center;
}
.container {
    height: 100vh;
    width: 100%;
}
.title {
    color: white;
    font-size: 3em;
    text-transform: lowercase;
}
</style>