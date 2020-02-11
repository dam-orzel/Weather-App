module.exports = {
  devServer: {
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "~@/assets/styles/main.scss";
        `
      }
    }
  }
};
