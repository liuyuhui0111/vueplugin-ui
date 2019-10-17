let publicPath = process.env.NODE_ENV === 'development' ? '/' : '/dist/'; // 生产环境文件构建路径
/*eslint-disable*/
const hostUrl = 'http://test.5ifapiao.com:8888'
let proxy = {
  '/fatsapi/fats-expert': {
    target: hostUrl,
    changeOrigin: true,
    pathRewrite: { '^/fatsapi/fats-expert': '/fatsapi/fats-expert' },
  },
};


// console.log(proxy);

module.exports = {
    // 基本路径
    publicPath: publicPath,
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
      proxy,
    },
    // 生产环境是否需要sourcemap
    productionSourceMap:false,
    chainWebpack: config => {
      // 移除 prefetch 插件
      config.plugins.delete('prefetch');
      // 增加package目录编译
      // config.module
      // .rule('js')
      // .include
      //   .add('/packages')
      //   .end()
      // .use('babel')
      //   .loader('babel-loader')
      //   .tap(options => {
      //     // 修改它的选项...
      //     return options
      //   })

    },
    configureWebpack: config => {
      // 去除生产环境console.log
      if (process.env.NODE_ENV === 'production') {
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      }
    },
    css: {
      extract: false,
      loaderOptions: { // 向 CSS 相关的 loader 传递选项
        scss: {
          // prependData: 
          //   `@import "~@/assets/styles/base.scss";
          //   @import "~@/assets/styles/theme.scss";`
            
        }
      }
    }

};

