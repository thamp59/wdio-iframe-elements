exports.config = {
  // services: ['sauce'], // Succeeds with sauce commented out
  // user: Your username, // Fails when sauce service is being used
  // key: Your access key,
  runner: 'local',
  specs: ['./*.spec.js'],
  logLevel: 'info',
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome',
      webSocketUrl: true,
      'sauce:options': {
        tags: ['Chrome-Windows-10'],
      }
    }
  ],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
}
