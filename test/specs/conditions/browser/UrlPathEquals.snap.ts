// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/UrlPathEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "/login",
  "expected": "/login",
  "message": "
  Condition: UrlPathEquals 
  Result: Success
  Expected: /login
  Actual: /login",
  "name": "UrlPathEquals",
  "passed": true,
}
`;

exports[`@conditions: browser/UrlPathEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "/login",
  "expected": "",
  "message": "
  Condition: UrlPathEquals 
  Result: Success
  Expected (Not): 
  Actual: /login",
  "name": "UrlPathEquals",
  "passed": true,
}
`;

exports[`@conditions: browser/UrlPathEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "/login",
  "expected": "/logout",
  "message": "
  Condition: UrlPathEquals 
  Result: Failed
  Expected: /logout
  Actual: /login",
  "name": "UrlPathEquals",
  "passed": false,
}
`;

exports[`@conditions: browser/UrlPathEquals.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "/logout",
  "message": "
  Condition: UrlPathEquals 
  Result: Failed
  Expected: /logout
  Actual: message",
  "name": "UrlPathEquals",
  "passed": false,
}
`;

exports[`@conditions: element/UrlPathEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "UrlPathEquals",
  false,
  5000,
  "any",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
]
`;
