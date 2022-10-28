import e2eConfig from './jest-e2e.config.mjs'

const unitConfig = {
    transform: {},
    verbose: true,
    testMatch: ['<rootDir>/test/unit/**/*.mjs'],
    testEnvironment: 'jest-environment-jsdom',
    testEnvironmentOptions: {
        html: '<html><video id="vid"></video></html>',
    }
};

let config = unitConfig;

// Make it easy to run any test in WebStorm IDE
const index = process.argv.indexOf('--runTestsByPath');
if (index > -1) {
    const value = process.argv[index + 1];
    if (value && value.includes('test/e2e')) {
        config = e2eConfig;
    }
}

export default config;
