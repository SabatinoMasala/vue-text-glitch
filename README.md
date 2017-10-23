# Vue text glitcch

Vue text glitch component.

[Check out the demo](https://sabatinomasala.github.io/vue-text-glitch/)

## Getting started

Pull in the package:
```sh
yarn add vue-text-glitch
```

Import the component:
```vue
import VueTextGlitch from 'vue-text-glitch'
export default {
    components: {
        VueTextGlitch
    }
}
```
Use in your template:
```vue
<TextGlitch
        text="Vue Text Glitch!"
></TextGlitch>
```

## Features

* Animation is generated using Javascript
* Multiple different glitches on the same page
* Plug and play

## Props

### text (default `Vue Text Glitch`)
The text that should be glitched.

### steps (default `20`)
Number of keyframes in the animation. 20 means there's a keyframe every 100/20 = 5%.

### height (default `2`)
The animation speed.

### id (default `text-glitch`)
This is a prefix for the animation and styles, so you can use multiple different glitches on the same page.

### speed (default `false`)
Whether or not to apply the error class

### fill (default `#2c3e50`)
The fill color.

### background (default `#fff`)
The background color.

### highlight1 (default `red`)
First highlight color.

### highlight2 (default `blue`)
Second highlight color.

## Credit

* Effect and explanation: [CSS Tricks](https://css-tricks.com/glitch-effect-text-images-svg/)