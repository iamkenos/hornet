// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@config: configure() S01: should return the base configuration 1`] = `
Object {
  "after": [Function],
  "afterCommand": [Function],
  "afterFeature": [Function],
  "afterScenario": [Function],
  "afterSession": [Function],
  "afterStep": [Function],
  "bail": 0,
  "baseDir": "any",
  "baseUrl": "",
  "before": [Function],
  "beforeCommand": [Function],
  "beforeFeature": [Function],
  "beforeScenario": [Function],
  "beforeSession": [Function],
  "beforeStep": [Function],
  "capabilities": Array [
    Object {
      "acceptInsecureCerts": true,
      "browserName": "chrome",
      "goog:chromeOptions": Object {
        "args": Array [
          "--disable-gpu",
          "--disable-web-security",
          "--window-size=1920,1200",
          "--allow-insecure-localhost",
          "--enable-speech-dispatcher",
          "--incognito",
        ],
        "binary": undefined,
      },
      "unhandledPromptBehavior": "ignore",
    },
  ],
  "connectionRetryCount": 3,
  "connectionRetryTimeout": 120000,
  "cucumberOpts": Object {
    "backtrace": false,
    "dryRun": false,
    "failFast": false,
    "format": Array [
      "pretty",
    ],
    "ignoreUndefinedDefinitions": true,
    "profile": Array [],
    "require": Array [
      "any../gherkin/**/*.def.{ts,js}",
      "any./fixtures/**/*.def.ts",
    ],
    "requireModule": Array [
      "tsconfig-paths/register",
    ],
    "retry": 0,
    "snippets": true,
    "source": true,
    "strict": false,
    "tagExpression": "",
    "timeout": 0,
  },
  "debug": false,
  "exclude": Array [],
  "framework": "cucumber",
  "hooks": Object {
    "after": [Function],
    "afterCommand": [Function],
    "afterFeature": [Function],
    "afterScenario": [Function],
    "afterSession": [Function],
    "afterStep": [Function],
    "before": [Function],
    "beforeCommand": [Function],
    "beforeFeature": [Function],
    "beforeScenario": [Function],
    "beforeSession": [Function],
    "beforeStep": [Function],
    "onComplete": [Function],
    "onPrepare": [Function],
    "onReload": [Function],
  },
  "locale": "default",
  "logLevel": "error",
  "maxInstances": 10,
  "metadata": Array [
    "any./fixtures/**/*.meta.ts",
  ],
  "onComplete": [Function],
  "onPrepare": [Function],
  "onReload": [Function],
  "reporters": Array [
    "spec",
    Array [
      "junit",
      Object {
        "outputDir": undefined,
        "outputFileFormat": [Function],
      },
    ],
    Array [
      "allure",
      Object {
        "disableWebdriverScreenshotsReporting": false,
        "disableWebdriverStepsReporting": true,
        "issueLinkTemplate": undefined,
        "outputDir": undefined,
        "useCucumberStepReporter": true,
      },
    ],
  ],
  "reports": Object {
    "outDir": ".reports",
    "reportIssueLink": undefined,
  },
  "runtime": Object {},
  "selenium": Object {
    "drivers": Object {
      "chrome": Object {
        "version": "latest",
      },
    },
  },
  "services": Array [
    "devtools",
    "intercept",
    Array [
      "selenium-standalone",
      Object {
        "args": Object {
          "drivers": Object {
            "chrome": Object {
              "version": "latest",
            },
          },
        },
        "installArgs": Object {
          "drivers": Object {
            "chrome": Object {
              "version": "latest",
            },
          },
        },
      },
    ],
    Array [
      "image-comparison",
      Object {
        "actualFolder": "actual",
        "baselineFolder": "baseline",
        "diffFolder": "diff",
        "formatImageName": "{tag}",
        "screenshotPath": ".snapshots/images",
      },
    ],
  ],
  "snapshots": Object {
    "images": Object {
      "actualDir": "actual",
      "baselineDir": "baseline",
      "diffDir": "diff",
      "ignoreAntialiasing": true,
      "outDir": ".snapshots/images",
      "returnAllCompareData": true,
      "saveAboveTolerance": 0,
      "skipCompare": false,
      "usePlatformDir": false,
    },
    "requests": Object {
      "actualDir": "actual",
      "baselineDir": "baseline",
      "diffDir": "diff",
      "include": Object {
        "body": true,
        "headers": false,
        "method": true,
        "url": true,
      },
      "outDir": ".snapshots/json",
      "paths": Array [],
      "prefilter": undefined,
      "regex": undefined,
      "skipCompare": false,
      "sort": true,
    },
    "responses": Object {
      "actualDir": "actual",
      "baselineDir": "baseline",
      "diffDir": "diff",
      "outDir": ".snapshots/json",
      "prefilter": undefined,
      "regex": undefined,
      "skipCompare": false,
    },
  },
  "specs": Array [
    "any./features/**/*.feature",
  ],
  "stepRetries": 0,
  "stepTimeout": 30000,
  "steps": Array [
    "any./fixtures/**/*.def.ts",
  ],
  "tags": "",
  "waitforTimeout": 5000,
}
`;
