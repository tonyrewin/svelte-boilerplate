const { build } = require("esbuild")
const svelte = require("esbuild-svelte")
const { derver } = require('derver')
const path = require("path")
const { preprocess } = require("./svelte.config")

const dev = process.env.NODE_ENV !== "production"
const port = 5000
const dir = 'public'

const options = {
  entryPoints: [path.resolve(__dirname, "src/index.ts")],
  bundle: true,
  color: true,
  incremental: dev,
  outfile: dir + '/bundle.js',
  plugins: [
    svelte({ 
      compileOptions: { dev, css: false },
      preprocessor: preprocess
    })
  ],
  tsconfig: path.resolve(__dirname, "tsconfig.json")
}

if(!dev) {
  options.minify = true
  options.treeShaking = true
}

build(options)
  .then(builder => {
    if (builder.warnings && builder.warnings.length) {
      builder.warnings.forEach(w => console.warn(w))
      return
    }
    if(dev) {
      derver({
        dir, 
        port,
        watch: [ dir, 'src' ],
        onwatch: async (lr,item) => {
            if (item == 'src') {
                lr.prevent()
                try {
                    await builder.rebuild()
                } catch(err) {
                    lr.error(err.message,'Svelte compile error')
                }
            }
        }
      })
    } else {
      console.log('successfully built for production')
      process.exit(0)
    }
  }).catch((err) => {
    console.error(err)
    process.exit(1)
  })
