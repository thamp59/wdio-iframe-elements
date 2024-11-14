exports.config = {
  runner: 'local',
  specs: ['./*.spec.js'],
  logLevel: 'warn',
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome',
    },
    {
      browserName: 'firefox',
    },
  ],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
}
