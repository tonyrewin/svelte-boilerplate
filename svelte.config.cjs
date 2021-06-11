const sveltePre = require('svelte-preprocess')
const { typescript } = require('svelte-preprocess-esbuild')

const { scss, globalStyle } = sveltePre

module.exports = { 
    preprocess: [
        typescript(),
        scss(),
        globalStyle()
    ]
}
