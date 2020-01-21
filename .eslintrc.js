module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
  ],
  globals: {
    jest: true,
    shallow: true,
    render: true,
    mount: true,
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  },
  rules: {
    'react/jsx-props-no-spreading': ["error", {"custom": "ignore"}],
  },
}
