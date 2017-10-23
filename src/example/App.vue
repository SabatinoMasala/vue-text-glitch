<template>
    <div id="app">
        <div class="text-center">
            <TextGlitch
                    fill="#000"
                    background="#fff"
                    id="glitch_1"
                    text="Vue Text Glitch!"
            ></TextGlitch>
        </div>
    </div>
</template>
<script>
    import TextGlitch from '../components/TextGlitch'
    export default {
        components: {
            TextGlitch
        }
    }
</script>
<style>
    @import url('https://fonts.googleapis.com/css?family=Varela');
    body {
        background: white;
        font-family: 'Varela', sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    .vue-glitch {
        font-size: 40px;
    }
    .text-center {
        text-align: center;
    }
</style>