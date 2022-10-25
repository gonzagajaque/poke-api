module.exports = {
    preset: 'jest-expo',
    transform: {
      '\\.[jt]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      'node_modules/(?!@react-native' +
        '|react-native' +
        '|react-navigation' +
        '|@expo-google-fonts' +
        '|react-native-svg' +
        '|react-test-renderer' +
        '|react-native-responsive-fontsize' +
        '|react-test-renderer)'
    ],
    watchman: false,
    setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
  };
  