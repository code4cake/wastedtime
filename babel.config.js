// @format
module.exports = function(api) {
  api.cache(true), api.assertVersion('^7.0')

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: true,
        },
      },
    ],
    '@babel/preset-flow',
  ]
  return {
    presets,
  }
}
