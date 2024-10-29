exports.config = {
  runner: 'local',
  specs: ['./*.spec.js'],
  logLevel: 'info',
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome',
      // browserVersion: 'latest',
      webSocketUrl: true,
      // platformName: 'Windows 11',
      // acceptInsecureCerts: true,
    }
  ],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
}
