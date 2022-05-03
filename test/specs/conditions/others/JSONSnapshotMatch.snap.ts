// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: others/JSONSnapshotMatch constructor S01: should set properties upon instantiation 1`] = `
Array [
  "JSONSnapshotMatch",
  false,
  5000,
  undefined,
  undefined,
  undefined,
  undefined,
  "any.json",
  undefined,
  "any.json",
  Object {
    "any": "any",
    "netfile1": "/Users/iamkenos/Workspace/iamkenos/hornet/test/fixtures/files/net-1.json",
    "netfile2": "/Users/iamkenos/Workspace/iamkenos/hornet/test/fixtures/files/net-2.json",
    "options": [Function],
  },
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
]
`;

exports[`@conditions: others/JSONSnapshotMatch.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "Match",
  "expected": "Match",
  "message": "
  Condition: JSONSnapshotMatch [any.json] 
  Result: Success
  Expected: Match
  Actual: Match",
  "name": "JSONSnapshotMatch",
  "passed": true,
}
`;

exports[`@conditions: others/JSONSnapshotMatch.getResult() S02: should return a passed result if not is true 1`] = `
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
  Condition: JSONSnapshotMatch [any.json] 
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
  "name": "JSONSnapshotMatch",
  "passed": true,
}
`;

exports[`@conditions: others/JSONSnapshotMatch.getResult() S03: should return a failed result if condition is not met 1`] = `
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
  Condition: JSONSnapshotMatch [any.json] 
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
  "name": "JSONSnapshotMatch",
  "passed": false,
}
`;

exports[`@conditions: others/JSONSnapshotMatch.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "Cannot read properties of undefined (reading 'skipCompare')",
  "expected": undefined,
  "message": "
  Condition: JSONSnapshotMatch [any.json] 
  Result: Failed
  Expected: undefined
  Actual: Cannot read properties of undefined (reading 'skipCompare')",
  "name": "JSONSnapshotMatch",
  "passed": false,
}
`;

exports[`@conditions: others/JSONSnapshotMatch.getResult() S05: should return a passed result for conditional matching with the regex option 1`] = `
Object {
  "actual": "Match",
  "expected": "Match conditionally",
  "message": "
  Condition: JSONSnapshotMatch [any.json] 
  Result: Success
  Expected: Match conditionally
  Actual: Match",
  "name": "JSONSnapshotMatch",
  "passed": true,
}
`;

exports[`@conditions: others/JSONSnapshotMatch.getResult() S05: should return a passed result if a valid sort key is given 1`] = `
Object {
  "actual": "Match",
  "expected": "Match",
  "message": "
  Condition: JSONSnapshotMatch [any.json] 
  Result: Success
  Expected: Match
  Actual: Match",
  "name": "JSONSnapshotMatch",
  "passed": true,
}
`;

exports[`@conditions: others/JSONSnapshotMatch.getResult() S06: should return a failed result if an error is encountered during diffing 1`] = `
Object {
  "actual": [Error],
  "expected": "Match conditionally",
  "message": "
  Condition: JSONSnapshotMatch [any.json] 
  Result: Failed
  Expected: Match conditionally
  Actual: Error",
  "name": "JSONSnapshotMatch",
  "passed": false,
}
`;

exports[`@conditions: others/JSONSnapshotMatch.getResult() S07: should return a passed result with the skip compare option 1`] = `
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
  Condition: JSONSnapshotMatch [any.json] 
  Result: Success
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
  "name": "JSONSnapshotMatch",
  "passed": true,
}
`;
