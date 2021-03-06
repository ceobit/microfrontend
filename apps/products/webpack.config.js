// Helper for combining webpack config objects
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (config, context) => {
  return merge(config, {
    devServer: {
      port: 8081,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'products',
        filename: 'remoteEntry.js',
        exposes: {
          './ProductsIndex': './src/app/app.element.js',
        },
      }),
    ],
  });
};
