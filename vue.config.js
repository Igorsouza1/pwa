const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')


module.exports = defineConfig({

  transpileDependencies: true,
  pwa: {
    name: 'Cavalo Pantaneiro',
    themeColor: '#4DBA88'
  },
  devServer: {
    proxy: 'http://localhost:8787/', 
    }
    
 
})
