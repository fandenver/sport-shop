const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents() {
            // implement node event listeners here
        },
    },
    video: true,
    viewportWidth: 1920,
    viewportHeight: 1080,

    env: {
        agentUrl: 'http://adt-test-agent',
        username: 'ewautotest',
        password: 'Uhbijnokm1!',
        kcClient: 'adtarget',
        kcRealm: 'mmp',
    }
});


