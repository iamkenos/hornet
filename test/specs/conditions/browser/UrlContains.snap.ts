// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/UrlContains.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "http://localhost:8080/login",
  "expected": "http://localhost:8080/",
  "message": "
  Condition: UrlContains 
  Result: Success
  Expected: http://localhost:8080/
  Actual: http://localhost:8080/login",
  "name": "UrlContains",
  "passed": true,
}
`;

exports[`@conditions: browser/UrlContains.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "http://localhost:8080/logout",
  "expected": "http://localhost:8080/login",
  "message": "
  Condition: UrlContains 
  Result: Success
  Expected (Not): http://localhost:8080/login
  Actual: http://localhost:8080/logout",
  "name": "UrlContains",
  "passed": true,
}
`;

exports[`@conditions: browser/UrlContains.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "http://localhost:8080/logout",
  "expected": "http://localhost:8080/login",
  "message": "
  Condition: UrlContains 
  Result: Failed
  Expected: http://localhost:8080/login
  Actual: http://localhost:8080/logout",
  "name": "UrlContains",
  "passed": false,
}
`;

exports[`@conditions: browser/UrlContains.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "http://localhost:8080/login",
  "message": "
  Condition: UrlContains 
  Result: Failed
  Expected: http://localhost:8080/login
  Actual: message",
  "name": "UrlContains",
  "passed": false,
}
`;

exports[`@conditions: element/UrlContains constructor S01: should set properties upon instantiation 1`] = `
Array [
  "UrlContains",
  false,
  5000,
  "http://localhost:8080/any",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
]
`;
