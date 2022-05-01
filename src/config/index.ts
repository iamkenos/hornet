import "tsconfig-paths/register";

import callsites from "callsites";
import chalk from "chalk";
import fs from "fs-extra";
import merge from "lodash/merge";
import path from "path";
import commands from "@commands";

import { AllureAdapter, FilesAdapter, logger } from "@common";
import { Config, CustomConfig, RestrictedCustomConfig } from "@config/types";

export const configure = (overrides: RestrictedCustomConfig): Config => {
  // custom config defaults
  const custom: CustomConfig = {
    baseDir: path.dirname(callsites()[1].getFileName()),
    debug: false,
    locale: "default",
    metadata: ["./fixtures/**/*.meta.ts"],
    reports: {
      outDir: ".reports",
      reportIssueLink: undefined
    },
    runtime: {},
    selenium: { drivers: { chrome: { version: "latest" } } },
    snapshots: {
      requests: {
        outDir: ".snapshots/json",
        skipCompare: false,
        sort: true,
        regex: undefined,
        prefilter: undefined,
        paths: [],
        include: {
          url: true,
          method: true,
          headers: false,
          body: true
        }
      },
      responses: {
        outDir: ".snapshots/json",
        skipCompare: false,
        regex: undefined,
        prefilter: undefined
      },
      images: {
        outDir: ".snapshots/images",
        usePlatformDir: false,
        skipCompare: false,
        ignoreAntialiasing: true,
        returnAllCompareData: true,
        saveAboveTolerance: 0
      }
    },
    specs: ["./features/**/*.feature"],
    exclude: [],
    steps: ["./fixtures/**/*.def.ts"],
    stepRetries: 0,
    stepTimeout: 30000,
    tags: "",
    hooks: {
      onPrepare: () => {},
      beforeSession: () => {},
      before: () => {},
      beforeCommand: () => {},
      beforeFeature: () => {},
      beforeScenario: () => {},
      beforeStep: () => {},
      afterStep: () => {},
      afterFeature: () => {},
      afterScenario: () => {},
      afterCommand: () => {},
      after: () => {},
      afterSession: () => {},
      onComplete: () => {},
      onReload: () => {}
    }
  };
  // resolve all known custom config directories, relative to the implementing config's file path
  const resolved = merge({}, custom, overrides);
  resolved.metadata = FilesAdapter.resolveGlob(resolved.baseDir, resolved.metadata);
  resolved.reports.outDir = path.resolve(resolved.baseDir, resolved.reports.outDir);
  resolved.specs = FilesAdapter.resolveGlob(resolved.baseDir, resolved.specs);
  resolved.exclude = FilesAdapter.resolveGlob(resolved.baseDir, resolved.exclude);
  resolved.steps = FilesAdapter.resolveGlob(resolved.baseDir, resolved.steps);
  Object.keys(resolved.snapshots).forEach((key: keyof typeof resolved.snapshots) => {
    resolved.snapshots[key].outDir = path.resolve(resolved.baseDir, resolved.snapshots[key].outDir);
    resolved.snapshots[key].actualDir = path.resolve(resolved.snapshots[key].outDir, "actual");
    resolved.snapshots[key].baselineDir = path.resolve(resolved.snapshots[key].outDir, "baseline");
    resolved.snapshots[key].diffDir = path.resolve(resolved.snapshots[key].outDir, "diff");
  });
  // base webdriverio configuration
  const wdio: WebdriverIO.Config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called.
    //
    // The specs are defined as an array of spec files (optionally using wildcards
    // that will be expanded). The test for each spec file will be run in a separate
    // worker process. In order to have a group of spec files run in the same worker
    // process simply enclose them in an array within the specs array.
    //
    // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
    // then the current working directory is where your `package.json` resides, so `wdio`
    // will be called from there.
    //
    // specs: [],
    // Patterns to exclude.
    // exclude: [],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://saucelabs.com/platform/platform-configurator
    //
    capabilities: [
      {
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        browserName: "chrome",
        acceptInsecureCerts: true,
        unhandledPromptBehavior: "ignore",
        "goog:chromeOptions": {
          args: [
            "--disable-gpu",
            "--disable-web-security",
            "--window-size=1920,1200",
            "--allow-insecure-localhost",
            "--enable-speech-dispatcher",
            "--incognito"
          ],
          binary: process.env.CHROMIUM_BIN
        }
      }
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: "error",
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: "",
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 5000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: [
      "devtools",
      "intercept",
      [
        "selenium-standalone",
        {
          installArgs: resolved.selenium,
          args: resolved.selenium
        }
      ],
      [
        "image-comparison",
        {
          screenshotPath: resolved.snapshots.images.outDir,
          actualFolder: resolved.snapshots.images.actualDir,
          baselineFolder: resolved.snapshots.images.baselineDir,
          diffFolder: resolved.snapshots.images.diffDir,
          formatImageName: "{tag}"
        }
      ]
    ],

    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: "cucumber",
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: [
      "spec",
      [
        "junit",
        {
          outputDir: path.join(resolved.reports.outDir, "junit"),
          outputFileFormat: (options: any) => `wdio-${options.cid}-junit-reporter.xml`
        }
      ],
      [
        "allure",
        {
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: false,
          useCucumberStepReporter: true,
          outputDir: path.join(resolved.reports.outDir, "allure"),
          issueLinkTemplate: resolved.reports.reportIssueLink
        }
      ]
    ],
    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
      // <string[]> (file/dir) require files before executing features
      require: [...FilesAdapter.resolveGlob(__dirname, ["../gherkin/**/*.def.{ts,js}"], true), ...resolved.steps],
      // <boolean> show full backtrace for errors
      backtrace: false,
      // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
      requireModule: ["tsconfig-paths/register"],
      // <boolean> invoke formatters without executing steps
      dryRun: false,
      // <boolean> abort the run on first failure
      failFast: false,
      // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
      format: ["pretty"],
      // <boolean> hide step definition snippets for pending steps
      snippets: true,
      // <boolean> hide source uris
      source: true,
      // <string[]> (name) specify the profile to use
      profile: [],
      // <boolean> fail if there are any undefined or pending steps
      strict: false,
      // <string> (expression) only execute the features or scenarios with tags matching the expression
      tagExpression: "",
      // <number> timeout for step definitions
      timeout: 0,
      // <boolean> Enable this config to treat undefined definitions as warnings.
      ignoreUndefinedDefinitions: true,
      // <number> Specify the number of times to retry failing test cases.
      retry: 0
    },

    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object}         config       wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: async function(config: Config, capabilities) {
      const { reports, snapshots } = config;
      fs.removeSync(reports.outDir);
      Object.keys(snapshots).forEach((key: keyof typeof snapshots) => {
        fs.removeSync(snapshots[key].actualDir);
        fs.removeSync(snapshots[key].diffDir);
        fs.mkdirsSync(snapshots[key].baselineDir);
      });

      const { onPrepare } = resolved.hooks as any;
      await onPrepare(config, capabilities);
    },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object}         config       wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {String}         cid          worker id (e.g. 0-0)
     */
    beforeSession: async function(config: Config, capabilities, specs, cid) {
      // these has to be here because of CLI overrides
      config.cucumberOpts.tagExpression = config.tags;
      config.cucumberOpts.timeout = config.debug ? 24 * 60 * 60 * 1000 : config.stepTimeout * (config.stepRetries || 1);

      const { beforeSession } = resolved.hooks as any;
      await beforeSession(config, capabilities, specs, cid);
    },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    before: async function(capabilities, specs) {
      commands.addBrowserCommands();
      commands.addElementCommands();

      const { before } = resolved.hooks as any;
      await before(capabilities, specs);
    },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName  hook command name
     * @param {Array}  args         arguments that command would receive
     */
    beforeCommand: async function(commandName, args) {
      const { beforeCommand } = resolved.hooks as any;
      await beforeCommand(commandName, args);
    },
    /**
     * Cucumber Hooks
     *
     * Runs before a Cucumber Feature.
     * @param {String}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    beforeFeature: async function(uri, feature) {
      await browser.storeWindowSize();

      const { beforeFeature } = resolved.hooks as any;
      await beforeFeature(uri, feature);
    },
    /**
     * Runs before a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
     * @param {Object}                 context  Cucumber World object
     */
    beforeScenario: async function(world, context) {
      const tags = world.pickle.tags || [];
      tags.forEach((i) => {
        const tag = i.name.replace(/[@]/, "");
        if (tag.startsWith("RELEASE-")) {
          AllureAdapter.reporter().addLabel("epic", tag.toUpperCase());
        } else if (tag.startsWith("ISSUE-")) {
          AllureAdapter.reporter().addIssue(tag.replace("ISSUE-", ""));
        } else if (tag.startsWith("ID-")) {
          AllureAdapter.reporter().addTestId(tag.replace("ID-", ""));
        } else {
          AllureAdapter.reporter().addLabel("tag", tag.toUpperCase());
        }
      });

      const { beforeScenario } = resolved.hooks as any;
      await beforeScenario(world, context);
    },
    /**
     * Runs before a Cucumber Step.
     * @param {Pickle.IPickleStep} step     step data
     * @param {IPickle}            scenario scenario pickle
     * @param {Object}             context  Cucumber World object
     */
    beforeStep: async function(step, scenario, context) {
      const { argument, keyword, text } = step as any;
      logger.debug(`${chalk.yellow("GHERKIN")} ${chalk.green.dim.bold(keyword)}${chalk.green.dim(text)}`);
      if (argument?.docString?.content) {
        AllureAdapter.reporter().addAttachment("DocString", argument?.docString?.content, "text/plain");
      }

      const { beforeStep } = resolved.hooks as any;
      await beforeStep(step, scenario, context);
    },
    /**
     * Runs after a Cucumber Step.
     * @param {Pickle.IPickleStep} step             step data
     * @param {IPickle}            scenario         scenario pickle
     * @param {Object}             result           results object containing scenario results
     * @param {boolean}            result.passed    true if scenario has passed
     * @param {string}             result.error     error stack if scenario failed
     * @param {number}             result.duration  duration of scenario in milliseconds
     * @param {Object}             context          Cucumber World object
     */
    afterStep: async function(step, scenario, result, context) {
      if (result.error) {
        await browser.takeScreenshot();
      }

      const { afterStep } = resolved.hooks as any;
      await afterStep(step, scenario, result, context);
    },
    /**
     * Runs after a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world            world object containing information on pickle and test step
     * @param {Object}                 result           results object containing scenario results
     * @param {boolean}                result.passed    true if scenario has passed
     * @param {string}                 result.error     error stack if scenario failed
     * @param {number}                 result.duration  duration of scenario in milliseconds
     * @param {Object}                 context          Cucumber World object
     */
    afterScenario: async function(world, result, context) {
      await browser.restoreWindowSize();
      await browser.clean();
      browser.config.runtime.activeMeta = undefined;
      browser.config.runtime.activeMetaSelectorKey = undefined;

      const { afterScenario } = resolved.hooks as any;
      await afterScenario(world, result, context);
    },
    /**
     * Runs after a Cucumber Feature.
     * @param {String}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    afterFeature: async function(uri, feature) {
      const { afterFeature } = resolved.hooks as any;
      await afterFeature(uri, feature);
    },

    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array}  args        arguments that command would receive
     * @param {Number} result      0 - command success, 1 - command error
     * @param {Object} error       error object if any
     */
    afterCommand: async function(commandName, args, result, error) {
      const { afterCommand } = resolved.hooks as any;
      await afterCommand(commandName, args, result, error);
    },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number}         result        0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that ran
     */
    after: async function(result, capabilities, specs) {
      const { after } = resolved.hooks as any;
      await after(result, capabilities, specs);
    },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object}         config       wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that ran
     */
    afterSession: async function(config, capabilities, specs) {
      const { afterSession } = resolved.hooks as any;
      await afterSession(config, capabilities, specs);
    },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object}         exitCode     0 - success, 1 - fail
     * @param {Object}         config       wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>}       results      object containing test results
     */
    onComplete: async function(exitCode, config: Config, capabilities, results) {
      const raw = path.join(config.reports.outDir, "allure");
      const html = path.join(raw, "html");
      await AllureAdapter.cli(["-q", "generate", raw, "-c", "-o", html]);

      const { onComplete } = resolved.hooks as any;
      await onComplete(exitCode, config, capabilities, results);
    },
    /**
     * Gets executed when a refresh happens.
     * @param {String} oldSessionId session ID of the old session
     * @param {String} newSessionId session ID of the new session
     */
    onReload: async function(oldSessionId, newSessionId) {
      const { onReload } = resolved.hooks as any;
      await onReload(oldSessionId, newSessionId);
    }
  };

  return merge(wdio, resolved);
};

export * from "./types";
