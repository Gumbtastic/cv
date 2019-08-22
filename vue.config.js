module.exports = {
  publicPath: '/cv/',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/scss/base/_variables.scss"; @import "~@/scss/base/_transitions.scss";',
      },
    },
  },
};
