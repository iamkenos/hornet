// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/NetworkRequestsMatch constructor S01: should set properties upon instantiation 1`] = `
Array [
  "NetworkRequestsMatch",
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
  "url",
  Array [
    "url",
    "method",
    "body",
  ],
]
`;

exports[`@conditions: browser/NetworkRequestsMatch.buildIncludedProps() S01: should build the default included properties when filtering network requests 1`] = `
Array [
  "url",
  "method",
  "body",
]
`;

exports[`@conditions: browser/NetworkRequestsMatch.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "Match",
  "expected": "Match",
  "message": "
  Condition: NetworkRequestsMatch [any.json] 
  Result: Success
  Expected: Match
  Actual: Match",
  "name": "NetworkRequestsMatch",
  "passed": true,
}
`;

exports[`@conditions: browser/NetworkRequestsMatch.getResult() S02: should return a passed result if not is true 1`] = `
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
  Condition: NetworkRequestsMatch [any.json] 
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
  "name": "NetworkRequestsMatch",
  "passed": true,
}
`;

exports[`@conditions: browser/NetworkRequestsMatch.getResult() S03: should return a failed result if condition is not met 1`] = `
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
  Condition: NetworkRequestsMatch [any.json] 
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
  "name": "NetworkRequestsMatch",
  "passed": false,
}
`;

exports[`@conditions: browser/NetworkRequestsMatch.getResult() S04: should return a failed result if an error is encountered 1`] = `
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
  Condition: NetworkRequestsMatch [any.json] 
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
  "name": "NetworkRequestsMatch",
  "passed": false,
}
`;
