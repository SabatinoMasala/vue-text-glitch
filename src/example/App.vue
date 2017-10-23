<template>
    <div id="app">
        <github-corners repo="SabatinoMasala/vue-text-glitch"></github-corners>
        <div class="text-center">
            <h1>Basic example</h1>
            <TextGlitch
                    text="Vue Text Glitch!"
            ></TextGlitch>
        </div>

        <div class="text-center">
            <h1>Custom color</h1>
            <div class="well black">
                <TextGlitch
                        id="example_2"
                        background="#000"
                        fill="#fff"
                        text="Vue Text Glitch!"
                ></TextGlitch>
            </div>
        </div>

        <div class="text-center">
            <h1>Custom highlights</h1>
            <TextGlitch
                    highlight1="#ff0000"
                    highlight2="#0000ff"
                    id="example_3"
                    :steps="5"
                    text="Vue Text Glitch!"
            ></TextGlitch>
        </div>

    </div>
</template>
<script>
    import Vue from 'vue';
    import VueGitHubCorners from 'vue-gh-corners';
    import 'vue-gh-corners/dist/vue-github-corners.css';
    Vue.use(VueGitHubCorners);
    import TextGlitch from '../components/TextGlitch'
    export default {
        components: {
            TextGlitch
        }
    }
</script>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
    body {
        background: white;
        font-weight: 600;
        font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    }
    h1 {
        color: #2c3e50;
        margin: 80px 0 30px;
        position: relative;
        &:after {
            position: absolute;
            left: 50%;
            bottom: -10px;
            transform: translate(-50%, 0);
            content: ' ';
            height: 3px;
            width: 50px;
            background-color: #42b983;
        }
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .vue-glitch {
        font-size: 40px;
    }
    .text-center {
        text-align: center;
    }
    .black {
        background-color: #000;
        color: #fff;
    }
    .well {
        width: 600px;
        margin: 0 auto;
        border-radius: 4px;
    }
</style>