const { globalStyle, postcss } = require("svelte-preprocess")
const { typescript } = require('svelte-preprocess-esbuild')

module.exports = { 
    preprocess: [
        typescript(),
        postcss(require('./postcss.config')),
        globalStyle()
    ]
}
