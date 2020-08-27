module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      useBuiltIns: 'usage',
    }],
  ],
  plugins: [
    'import-glob',
    '@babel/plugin-syntax-dynamic-import',
  ],
}
