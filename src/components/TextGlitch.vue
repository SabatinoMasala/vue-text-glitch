<template>
    <div :id="id" class="vue-glitch" :data-text="text">{{ text }}</div>
</template>
<script>
    import StyleHelper from '@/helpers/StyleHelper'
    export default {
        props: {
            text: {
                type: String,
                default: 'Vue Text Glitch'
            },
            steps: {
                type: Number,
                default: 20
            },
            height: {
                type: Number,
                default: 100
            },
            id: {
                type: String,
                default: 'text-glitch'
            },
            speed: {
                type: Number,
                default: 2
            },
            fill: {
                type: String,
                default: '#fff'
            },
            background: {
                type: String,
                default: '#000'
            },
            highlight1: {
                type: String,
                default: 'red'
            },
            highlight2: {
                type: String,
                default: 'blue'
            }
        },
        created() {
            let style = '';
            let percentages = [];
            for (let i = 0; i <= this.steps; i++) {
                percentages += StyleHelper.createKeyFrame((100 / this.steps) * i, this.height);
            }
            style += StyleHelper.createWrapper(percentages, this.id + '-noise-anim');
            percentages = [];
            for (let i = 0; i <= this.steps; i++) {
                percentages += StyleHelper.createKeyFrame((100 / this.steps) * i, this.height);
            }
            style += StyleHelper.createWrapper(percentages, this.id + '-noise-anim-2');
            style += `
            #${this.id}.vue-glitch:after {
                -webkit-animation:${this.id}-noise-anim ${this.speed}s infinite linear alternate-reverse;
                animation:${this.id}-noise-anim ${this.speed}s infinite linear alternate-reverse;
                color: ${this.fill};
                background: ${this.background};
                text-shadow: -1px 0 ${this.highlight1};
            }
            #${this.id}.vue-glitch:before {
                -webkit-animation:${this.id}-noise-anim-2 ${this.speed}s infinite linear alternate-reverse;
                animation:${this.id}-noise-anim-2 ${this.speed}s infinite linear alternate-reverse;
                color: ${this.fill};
                background: ${this.background};
                text-shadow: 1px 0 ${this.highlight2};
            }
            #${this.id}.vue-glitch {
                color: ${this.fill};
            }
`;
            let styleDom = document.createElement('style');
            styleDom.innerHTML = style;
            document.head.appendChild(styleDom)
        }
    }
</script>
<style lang="scss">
    .vue-glitch {
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        display: inline-block;
        &:after {
            content: attr(data-text);
            position: absolute;
            left: 2px;
            top: 0;
            overflow: hidden;
            clip: rect(0, 900px, 0, 0);
        }
        &:before {
            content: attr(data-text);
            position: absolute;
            left: -2px;
            top: 0;
            overflow: hidden;
            clip: rect(0, 900px, 0, 0);
        }
    }
</style>