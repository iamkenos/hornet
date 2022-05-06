// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/UrlPathContains constructor S01: should set properties upon instantiation 1`] = `
Array [
  "UrlPathContains",
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

exports[`@conditions: browser/UrlPathContains.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "/login",
  "expected": "",
  "message": "
  Condition: UrlPathContains 
  Result: Success
  Expected: 
  Actual: /login",
  "name": "UrlPathContains",
  "passed": true,
}
`;

exports[`@conditions: browser/UrlPathContains.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "/login",
  "expected": "/logout",
  "message": "
  Condition: UrlPathContains 
  Result: Success
  Expected (Not): /logout
  Actual: /login",
  "name": "UrlPathContains",
  "passed": true,
}
`;

exports[`@conditions: browser/UrlPathContains.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "/login",
  "expected": "/logout",
  "message": "
  Condition: UrlPathContains 
  Result: Failed
  Expected: /logout
  Actual: /login",
  "name": "UrlPathContains",
  "passed": false,
}
`;

exports[`@conditions: browser/UrlPathContains.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "http://localhost:8080/login",
  "message": "
  Condition: UrlPathContains 
  Result: Failed
  Expected: http://localhost:8080/login
  Actual: message",
  "name": "UrlPathContains",
  "passed": false,
}
`;
