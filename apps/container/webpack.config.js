// Helper for combining webpack config objects
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (config, context) => {
  return merge(config, {
    devServer: {
      port: 8080,
      hot: false,
      liveReload: false,
      proxy: {
        'http://localhost:8080': 'http://localhost:8080',
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'container',
        remotes: {
          products: 'products@http://localhost:8081/remoteEntry.js',
        },
      }),
    ],
  });
};
