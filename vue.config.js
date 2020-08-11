module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/sass/_var.scss";'
      }
    }
  },
  devServer:{
      hotOnly:true
  }
}
