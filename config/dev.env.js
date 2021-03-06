'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://www.ai-sc.net/scmAdmin"',//接口url
  WS_API:'"ws://169.254.122.167:8081"', 
})
