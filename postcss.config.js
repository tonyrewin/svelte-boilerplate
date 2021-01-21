module.exports = {
    minify: true,
    extract: true,
    sourceMap: true,
    plugins: [
      require('autoprefixer'),
      require('cssnano')
    ]
  }