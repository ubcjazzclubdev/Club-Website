module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = "UBC Jazz Club";
      return args;
    });
  }
};
