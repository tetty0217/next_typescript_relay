const withSass = require('@zeit/next-sass');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = withSass({
  cssModules: true,
  sassLoaderOptions: {
    includePaths: ["src/styles/**/*.sass"]
  },
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    return config
  }
});
