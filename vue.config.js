const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.bilibili.com:443', // 注意！此处为后端提供的真实接口
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          // 如果接口中是没有api的，那就直接置空，'^/api': ''，
          // 如果接口中有api，那就得写成{'^/api':'/api'}
          '^/api': ''}
        }
      }
  
    }
})

