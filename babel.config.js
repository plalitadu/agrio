module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-paper/babel',
      // 'babel-plugin-root-import',
      {
        rootPathPrefix: '@app',
        rootPathSuffix: 'src'
      }
    ]
  ]
};
