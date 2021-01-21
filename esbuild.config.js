const { build } = require("esbuild")
const svelte = require("esbuild-svelte")
const chokidar = require("chokidar")
const devserver = require('live-dev-server')
const path = require("path")
const { preprocess } = require("./svelte.config")

const dev = process.env.NODE_ENV !== "production"
const port = 5000
const root = './public'
const pattern = "src/**/*"
const options = {
  entryPoints: [path.resolve(__dirname, "src/index.ts")],
  bundle: true,
  color: true,
  incremental: true,
  outfile: root + '/bundle.js',
  plugins: [
    svelte({ compileOptions: { dev }, preprocessor: preprocess })
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
      console.log('successfully built for development')
      chokidar
        .watch(pattern, { interval: 0, awaitWriteFinish: true, ignoreInitial: true })
        .on("all", () => {
          const ts = Date.now()
          builder.rebuild().then(() => {
            console.log("\x1b[36m", '\nrebuilded in ' + (Date.now() - ts).toString() + 'ms' )
          })
        })
        .on("ready", () => {
          console.log("\x1b[33m", "")
          console.log("watching " + pattern)
          // serve({ port: 5000 }, options).then(console.info)
          devserver({ root, port })
        })
    } else {
      console.log('successfully built for production')
      process.exit(0)
    }
  }).catch(() => process.exit(1))
