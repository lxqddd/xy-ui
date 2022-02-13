/**
 * @type import('@jest/types').Config.InitialOptions
 */
module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'vue'],
  testMatch: ['<rootDir>/src/**/*.(spec|test).(ts|tsx)'],
  roots: ['<rootDir>']
}
