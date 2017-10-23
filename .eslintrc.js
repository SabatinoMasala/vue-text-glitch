module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    rules: {
        indent: ['error', 4],
        'space-before-function-paren': 0,
        'semi': 0,
        'import/first': 0,
        'no-debugger': 0,
        'no-unused-vars': 0
    },
    globals: {}
};
