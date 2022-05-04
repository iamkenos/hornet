// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/GoogleAnalyticsMatch constructor S01: should set properties upon instantiation 1`] = `
Array [
  "GoogleAnalyticsMatch",
  false,
  5000,
  undefined,
  undefined,
  undefined,
  undefined,
  "any.json",
  undefined,
  "any.json",
  undefined,
  Object {
    "actualDir": "ouput/actual",
    "baselineDir": "ouput/baseline",
    "diffDir": "ouput/diff",
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
  undefined,
  Array [
    "google-analytics.com",
    "analytics.google.com",
  ],
  Array [
    "xmlhttprequest",
    "img",
    "beacon",
  ],
  "click",
]
`;

exports[`@conditions: browser/GoogleAnalyticsMatch.filterGA() S01: should filter google analytics from browser perf entries 1`] = `
Array [
  Object {
    "query": Object {
      "_gaz": "1",
      "_p": "412221945",
      "_s": "1",
      "_ss": "1",
      "_z": "ccd.tbB",
      "cid": "1715266434.1635930503",
      "dl": "https://portal.foo/",
      "dt": "foo",
      "en": "page_view",
      "gtm": "2oe520",
      "sct": "52",
      "seg": "0",
      "sid": "1651648710",
      "sr": "2560x1440",
      "tid": "G-H65MR9RBXH",
      "ul": "en",
      "v": "2",
    },
    "url": "https://analytics.google.com/g/collect",
  },
  Object {
    "query": Object {
      "_et": "167",
      "_p": "412221945",
      "_s": "2",
      "_z": "ccd.tbB",
      "cid": "1715266434.1635930503",
      "dl": "https://portal.foo/",
      "dt": "foo",
      "en": "scroll",
      "epn.percent_scrolled": "90",
      "gtm": "2oe520",
      "sct": "52",
      "seg": "0",
      "sid": "1651648710",
      "sr": "2560x1440",
      "tid": "G-H65MR9RBXH",
      "ul": "en",
      "v": "2",
    },
    "url": "https://analytics.google.com/g/collect",
  },
  Object {
    "query": Object {
      "_gaz": "1",
      "_p": "412221945",
      "_s": "1",
      "_ss": "1",
      "_z": "ccd.tbB",
      "cid": "1715266434.1635930503",
      "dl": "https://portal.foo/",
      "dt": "foo",
      "en": "click",
      "gtm": "2oe520",
      "sct": "52",
      "seg": "0",
      "sid": "1651648710",
      "sr": "2560x1440",
      "tid": "G-H65MR9RBXH",
      "ul": "en",
      "v": "2",
    },
    "url": "https://analytics.google.com/g/collect",
  },
]
`;

exports[`@conditions: browser/GoogleAnalyticsMatch.filterGA() S02: should filter specified event from filtered entries 1`] = `
Array [
  Object {
    "query": Object {
      "_gaz": "1",
      "_p": "412221945",
      "_s": "1",
      "_ss": "1",
      "_z": "ccd.tbB",
      "cid": "1715266434.1635930503",
      "dl": "https://portal.foo/",
      "dt": "foo",
      "en": "click",
      "gtm": "2oe520",
      "sct": "52",
      "seg": "0",
      "sid": "1651648710",
      "sr": "2560x1440",
      "tid": "G-H65MR9RBXH",
      "ul": "en",
      "v": "2",
    },
    "url": "https://analytics.google.com/g/collect",
  },
]
`;

exports[`@conditions: browser/GoogleAnalyticsMatch.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "Match",
  "expected": "Match",
  "message": "
  Condition: GoogleAnalyticsMatch [any.json] 
  Result: Success
  Expected: Match
  Actual: Match",
  "name": "GoogleAnalyticsMatch",
  "passed": true,
}
`;

exports[`@conditions: browser/GoogleAnalyticsMatch.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "[
  {
    \\"kind\\": \\"A\\",
    \\"index\\": 1,
    \\"item\\": {
      \\"kind\\": \\"N\\",
      \\"rhs\\": {
        \\"url\\": \\"https://reqres.in/api/logout\\",
        \\"method\\": \\"POST\\",
        \\"headers\\": {
          \\"accept\\": \\"*/*\\",
          \\"content-type\\": \\"application/x-www-form-urlencoded; charset=UTF-8\\"
        },
        \\"body\\": \\"email=eve.holt%40reqres.in&password=cityslicka\\"
      }
    }
  },
  {
    \\"kind\\": \\"A\\",
    \\"index\\": 0,
    \\"item\\": {
      \\"kind\\": \\"N\\",
      \\"rhs\\": {
        \\"url\\": \\"https://reqres.in/api/login\\",
        \\"method\\": \\"POST\\",
        \\"headers\\": {
          \\"accept\\": \\"*/*\\",
          \\"content-type\\": \\"application/x-www-form-urlencoded; charset=UTF-8\\"
        },
        \\"body\\": \\"email=eve.holt%40reqres.in&password=cityslicka\\"
      }
    }
  }
]",
  "expected": "Match",
  "message": "
  Condition: GoogleAnalyticsMatch [any.json] 
  Result: Success
  Expected (Not): Match
  Actual: [
  {
    \\"kind\\": \\"A\\",
    \\"index\\": 1,
    \\"item\\": {
      \\"kind\\": \\"N\\",
      \\"rhs\\": {
        \\"url\\": \\"https://reqres.in/api/logout\\",
        \\"method\\": \\"POST\\",
        \\"headers\\": {
          \\"accept\\": \\"*/*\\",
          \\"content-type\\": \\"application/x-www-form-urlencoded; charset=UTF-8\\"
        },
        \\"body\\": \\"email=eve.holt%40reqres.in&password=cityslicka\\"
      }
    }
  },
  {
    \\"kind\\": \\"A\\",
    \\"index\\": 0,
    \\"item\\": {
      \\"kind\\": \\"N\\",
      \\"rhs\\": {
        \\"url\\": \\"https://reqres.in/api/login\\",
        \\"method\\": \\"POST\\",
        \\"headers\\": {
          \\"accept\\": \\"*/*\\",
          \\"content-type\\": \\"application/x-www-form-urlencoded; charset=UTF-8\\"
        },
        \\"body\\": \\"email=eve.holt%40reqres.in&password=cityslicka\\"
      }
    }
  }
]",
  "name": "GoogleAnalyticsMatch",
  "passed": true,
}
`;

exports[`@conditions: browser/GoogleAnalyticsMatch.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "[
  {
    \\"kind\\": \\"A\\",
    \\"index\\": 1,
    \\"item\\": {
      \\"kind\\": \\"N\\",
      \\"rhs\\": {
        \\"url\\": \\"https://reqres.in/api/logout\\",
        \\"method\\": \\"POST\\",
        \\"headers\\": {
          \\"accept\\": \\"*/*\\",
          \\"content-type\\": \\"application/x-www-form-urlencoded; charset=UTF-8\\"
        },
        \\"body\\": \\"email=eve.holt%40reqres.in&password=cityslicka\\"
      }
    }
  },
  {
    \\"kind\\": \\"A\\",
    \\"index\\": 0,
    \\"item\\": {
      \\"kind\\": \\"N\\",
      \\"rhs\\": {
        \\"url\\": \\"https://reqres.in/api/login\\",
        \\"method\\": \\"POST\\",
        \\"headers\\": {
          \\"accept\\": \\"*/*\\",
          \\"content-type\\": \\"application/x-www-form-urlencoded; charset=UTF-8\\"
        },
        \\"body\\": \\"email=eve.holt%40reqres.in&password=cityslicka\\"
      }
    }
  }
]",
  "expected": "Match",
  "message": "
  Condition: GoogleAnalyticsMatch [any.json] 
  Result: Failed
  Expected: Match
  Actual: [
  {
    \\"kind\\": \\"A\\",
    \\"index\\": 1,
    \\"item\\": {
      \\"kind\\": \\"N\\",
      \\"rhs\\": {
        \\"url\\": \\"https://reqres.in/api/logout\\",
        \\"method\\": \\"POST\\",
        \\"headers\\": {
          \\"accept\\": \\"*/*\\",
          \\"content-type\\": \\"application/x-www-form-urlencoded; charset=UTF-8\\"
        },
        \\"body\\": \\"email=eve.holt%40reqres.in&password=cityslicka\\"
      }
    }
  },
  {
    \\"kind\\": \\"A\\",
    \\"index\\": 0,
    \\"item\\": {
      \\"kind\\": \\"N\\",
      \\"rhs\\": {
        \\"url\\": \\"https://reqres.in/api/login\\",
        \\"method\\": \\"POST\\",
        \\"headers\\": {
          \\"accept\\": \\"*/*\\",
          \\"content-type\\": \\"application/x-www-form-urlencoded; charset=UTF-8\\"
        },
        \\"body\\": \\"email=eve.holt%40reqres.in&password=cityslicka\\"
      }
    }
  }
]",
  "name": "GoogleAnalyticsMatch",
  "passed": false,
}
`;

exports[`@conditions: browser/GoogleAnalyticsMatch.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "[
  {
    \\"kind\\": \\"A\\",
    \\"index\\": 1,
    \\"item\\": {
      \\"kind\\": \\"N\\",
      \\"rhs\\": {
        \\"url\\": \\"https://reqres.in/api/logout\\",
        \\"method\\": \\"POST\\",
        \\"headers\\": {
          \\"accept\\": \\"*/*\\",
          \\"content-type\\": \\"application/x-www-form-urlencoded; charset=UTF-8\\"
        },
        \\"body\\": \\"email=eve.holt%40reqres.in&password=cityslicka\\"
      }
    }
  },
  {
    \\"kind\\": \\"A\\",
    \\"index\\": 0,
    \\"item\\": {
      \\"kind\\": \\"N\\",
      \\"rhs\\": {
        \\"url\\": \\"https://reqres.in/api/login\\",
        \\"method\\": \\"POST\\",
        \\"headers\\": {
          \\"accept\\": \\"*/*\\",
          \\"content-type\\": \\"application/x-www-form-urlencoded; charset=UTF-8\\"
        },
        \\"body\\": \\"email=eve.holt%40reqres.in&password=cityslicka\\"
      }
    }
  }
]",
  "expected": "Match",
  "message": "
  Condition: GoogleAnalyticsMatch [any.json] 
  Result: Failed
  Expected: Match
  Actual: [
  {
    \\"kind\\": \\"A\\",
    \\"index\\": 1,
    \\"item\\": {
      \\"kind\\": \\"N\\",
      \\"rhs\\": {
        \\"url\\": \\"https://reqres.in/api/logout\\",
        \\"method\\": \\"POST\\",
        \\"headers\\": {
          \\"accept\\": \\"*/*\\",
          \\"content-type\\": \\"application/x-www-form-urlencoded; charset=UTF-8\\"
        },
        \\"body\\": \\"email=eve.holt%40reqres.in&password=cityslicka\\"
      }
    }
  },
  {
    \\"kind\\": \\"A\\",
    \\"index\\": 0,
    \\"item\\": {
      \\"kind\\": \\"N\\",
      \\"rhs\\": {
        \\"url\\": \\"https://reqres.in/api/login\\",
        \\"method\\": \\"POST\\",
        \\"headers\\": {
          \\"accept\\": \\"*/*\\",
          \\"content-type\\": \\"application/x-www-form-urlencoded; charset=UTF-8\\"
        },
        \\"body\\": \\"email=eve.holt%40reqres.in&password=cityslicka\\"
      }
    }
  }
]",
  "name": "GoogleAnalyticsMatch",
  "passed": false,
}
`;
