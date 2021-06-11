import { build } from 'esbuild'
import svelte from 'esbuild-svelte'
import derverPkg from 'derver'
import svelteCfg from './svelte.config.cjs'

const { preprocess } = svelteCfg
const { derver } = derverPkg
const dev = process.env.NODE_ENV == 'development'
const port = 5000
const dir = 'public'

const options = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  color: true,
  incremental: dev,
  outfile: dir + '/bundle.js',
  plugins: [
    svelte({
      compileOptions: { dev, css: false},
      preprocess
    })
  ]
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
        onwatch: async (lr, item) => {
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
