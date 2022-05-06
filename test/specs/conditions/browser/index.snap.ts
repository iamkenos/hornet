// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/BrowserConditions.alertExists() S01: should add the AlertExists condition 1`] = `
Array [
  AlertExists {
    "expected": true,
    "name": "AlertExists",
    "not": false,
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.alertTextContains() S01: should add the AlertTextContains condition 1`] = `
Array [
  AlertTextContains {
    "expected": "any",
    "name": "AlertTextContains",
    "not": false,
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.alertTextEquals() S01: should add the AlertTextEquals condition 1`] = `
Array [
  AlertTextEquals {
    "expected": "any",
    "name": "AlertTextEquals",
    "not": false,
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.cookieContains() S01: should add the CookieContains condition 1`] = `
Array [
  CookieContains {
    "expected": "foo",
    "name": "CookieContains",
    "not": false,
    "on": "any",
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.cookieEquals() S01: should add the CookieEquals condition 1`] = `
Array [
  CookieEquals {
    "expected": "foo",
    "name": "CookieEquals",
    "not": false,
    "on": "any",
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.cookieExists() S01: should add the CookieExists condition 1`] = `
Array [
  CookieExists {
    "expected": true,
    "name": "CookieExists",
    "not": false,
    "on": "any",
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.googleAnalyticsMatch() S01: should add the GoogleAnalyticsMatch condition 1`] = `
Array [
  GoogleAnalyticsMatch {
    "comparable": undefined,
    "domains": Array [
      "google-analytics.com",
      "analytics.google.com",
    ],
    "event": "foo",
    "filename": "any.json",
    "initiatorTypes": Array [
      "xmlhttprequest",
      "img",
      "beacon",
    ],
    "name": "GoogleAnalyticsMatch",
    "not": false,
    "on": "any.json",
    "options": Object {
      "actualDir": "ouput/actual",
      "baselineDir": "ouput/baseline",
      "diffDir": "ouput/actual",
      "include": Object {
        "body": true,
        "headers": false,
        "method": true,
        "url": true,
      },
      "outDir": "ouput",
      "paths": Array [],
      "prefilter": undefined,
      "regex": undefined,
      "skipCompare": false,
      "sort": true,
    },
    "sortkey": undefined,
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.networkRequestsMatch() S01: should add the NetworkRequestsMatch condition 1`] = `
Array [
  NetworkRequestsMatch {
    "comparable": undefined,
    "filename": "any.json",
    "name": "NetworkRequestsMatch",
    "not": false,
    "on": "any.json",
    "options": Object {
      "actualDir": "ouput/actual",
      "baselineDir": "ouput/baseline",
      "diffDir": "ouput/actual",
      "include": Object {
        "body": true,
        "headers": false,
        "method": true,
        "url": true,
      },
      "outDir": "ouput",
      "paths": Array [],
      "prefilter": undefined,
      "regex": undefined,
      "skipCompare": false,
      "sort": true,
    },
    "props": Array [
      "url",
      "method",
      "body",
    ],
    "sortkey": "url",
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.ready() S01: should add the DocumentReady condition 1`] = `
Array [
  DocumentReady {
    "expected": "complete",
    "name": "DocumentReady",
    "not": false,
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.snapshotMatch() S01: should add the SnapshotMatch condition 1`] = `
Array [
  DocumentReady {
    "expected": "complete",
    "name": "DocumentReady",
    "not": false,
    "timeout": 5000,
  },
  SnapshotMatch {
    "context": "page",
    "expected": "Within 0% difference",
    "filename": "default/google-chrome/foo.png",
    "name": "SnapshotMatch",
    "not": false,
    "on": "default/google-chrome/foo.png",
    "options": Object {
      "actualDir": "ouput/actual",
      "baselineDir": "ouput/baseline",
      "diffDir": "ouput/actual",
      "ignoreAntialiasing": true,
      "outDir": "ouput",
      "returnAllCompareData": true,
      "saveAboveTolerance": 0,
      "skipCompare": false,
      "usePlatformDir": false,
    },
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.storageItemContains() S01: should add the StorageItemContains condition 1`] = `
Array [
  StorageItemContains {
    "expected": "bar",
    "isLocal": true,
    "key": "foo",
    "name": "StorageItemContains",
    "not": false,
    "on": "Storage Item (local): foo",
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.storageItemEquals() S01: should add the StorageItemEquals condition 1`] = `
Array [
  StorageItemEquals {
    "expected": "bar",
    "isLocal": true,
    "key": "foo",
    "name": "StorageItemEquals",
    "not": false,
    "on": "Storage Item (local): foo",
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.storageItemExists() S01: should add the StorageItemExists condition 1`] = `
Array [
  StorageItemExists {
    "expected": true,
    "isLocal": true,
    "key": "foo",
    "name": "StorageItemExists",
    "not": false,
    "on": "Storage Item (local): foo",
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.titleContains() S01: should add the TitleContains condition 1`] = `
Array [
  TitleContains {
    "expected": "any",
    "name": "TitleContains",
    "not": false,
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.titleEquals() S01: should add the TitleEquals condition 1`] = `
Array [
  TitleEquals {
    "expected": "any",
    "name": "TitleEquals",
    "not": false,
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.urlContains() S01: should add the UrlContains condition 1`] = `
Array [
  UrlContains {
    "expected": "http://localhost:8080/any",
    "name": "UrlContains",
    "not": false,
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.urlEquals() S01: should add the UrlEquals condition 1`] = `
Array [
  UrlEquals {
    "expected": "http://localhost:8080/any",
    "name": "UrlEquals",
    "not": false,
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.urlPathContains() S01: should add the UrlPathContains condition 1`] = `
Array [
  UrlPathContains {
    "expected": "any",
    "name": "UrlPathContains",
    "not": false,
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.urlPathEquals() S01: should add the UrlPathEquals condition 1`] = `
Array [
  UrlPathEquals {
    "expected": "any",
    "name": "UrlPathEquals",
    "not": false,
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.windowCountEquals() S01: should add the WindowCountEquals condition 1`] = `
Array [
  WindowCountEquals {
    "expected": 1,
    "name": "WindowCountEquals",
    "not": false,
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.windowCountLessThan() S01: should add the WindowCountLessThan condition 1`] = `
Array [
  WindowCountLessThan {
    "expected": 1,
    "name": "WindowCountLessThan",
    "not": false,
    "timeout": 5000,
  },
]
`;

exports[`@conditions: browser/BrowserConditions.windowCountMoreThan() S01: should add the WindowCountMoreThan condition 1`] = `
Array [
  WindowCountMoreThan {
    "expected": 1,
    "name": "WindowCountMoreThan",
    "not": false,
    "timeout": 5000,
  },
]
`;
