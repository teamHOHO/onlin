const path = require('path');
const withImages = require('next-images');

module.exports = {
  //   trailingSlash: true,
  //   webpackDevMiddleware: (config) => {
  //     config.watchOptions = {
  //       poll: 1000,
  //       aggregateTimeout: 300,
  //     };
  //     return config;
  //   },
  env: {
    customKey: 'my-value',
    REACT_APP_KAKAOMAP_API_KEY: process.env.REACT_APP_KAKAOMAP_API_KEY,
    REACT_APP_FACEBOOK_APP_ID: process.env.REACT_APP_FACEBOOK_APP_ID,
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./variables.scss";`,
  },
  use: ['@svgr/webpack'],
  //   withImages,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: { plugins: [{ removeViewBox: false }] },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
};
