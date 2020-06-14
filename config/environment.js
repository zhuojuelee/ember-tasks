"use strict";

module.exports = function (environment) {
  let ENV = {
    modulePrefix: "learn-ember",
    environment,
    firebase: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: "ember-task-d75de.firebaseapp.com",
      databaseURL: "https://ember-task-d75de.firebaseio.com",
      projectId: "ember-task-d75de",
      storageBucket: "ember-task-d75de.appspot.com",
      messagingSenderId: "174431914230",
      appId: "1:174431914230:web:71e36360ea9e269e5a04d7",
      measurementId: "G-G8PZ98T1H8",
    },
    torii: {
      sessionServiceName: "session",
    },
    rootURL: "/",
    locationType: "auto",
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
  }

  if (environment === "production") {
    // here you can enable a production-specific feature
  }

  return ENV;
};
