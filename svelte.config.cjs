const { globalStyle, scss } = require('svelte-preprocess')
const { typescript } = require('svelte-preprocess-esbuild')

module.exports = { 
    preprocess: [
        typescript(),
        scss(),
        globalStyle()
    ]
}
