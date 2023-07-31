module.exports = {
    // ...
    overrides: [
      {
        files: ['babel.config.js', 'src/pages/LoginPage.vue'],
        parser: '@babel/eslint-parser',
        parserOptions: {
          requireConfigFile: false,
        },
      },
    ],
  };
  