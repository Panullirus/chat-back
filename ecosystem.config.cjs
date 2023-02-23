module.exports = {
    apps: [{
      name: 'my-app',
      script: './App.js',
      interpreter: 'esm',
      node_args: '--experimental-modules',
      env: {
        NODE_ENV: 'production',
        APP_PORT: 8081
      }
    }]
  }