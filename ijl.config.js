const pkg = require("./package");

module.exports = {
  apiPath: "stubs/api",
  config: {
    "books.api.base.url": "/api",
  },
  webpackConfig: {
    output: {
      publicPath: `/static/loangiver/${pkg.version}/`,
    },
    // "module": {
    //     "rules": [
    //       {
    //         "test": /\.css$/i,
    //         "use": ['style-loader', 'css-loader'],
    //       },
    //     ],
    //   },
  },
  apps: {
    loangiver: { name: pkg.name, version: pkg.version },
  },
};
