export default {
    createKeyFrame(percentage, height = 100) {
        return `${percentage}% { clip: rect(${Math.random() * height}px, 9999px, ${Math.random() * height}px, 0); }`
    },
    createWrapper(percentages = [], name = 'noise-anim') {
        return `
@-webkit-keyframes ${name} {
    ${percentages}
}
@keyframes ${name} {
    ${percentages}
}`
    }
}
