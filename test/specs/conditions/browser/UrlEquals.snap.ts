// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/UrlEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "UrlEquals",
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

exports[`@conditions: browser/UrlEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "http://localhost:8080/login",
  "expected": "http://localhost:8080/login",
  "message": "
  Condition: UrlEquals 
  Result: Success
  Expected: http://localhost:8080/login
  Actual: http://localhost:8080/login",
  "name": "UrlEquals",
  "passed": true,
}
`;

exports[`@conditions: browser/UrlEquals.getResult() S02A: should return a passed result if not is true 1`] = `
Object {
  "actual": "http://localhost:8080/login",
  "expected": "http://localhost:8080/logout",
  "message": "
  Condition: UrlEquals 
  Result: Success
  Expected (Not): http://localhost:8080/logout
  Actual: http://localhost:8080/login",
  "name": "UrlEquals",
  "passed": true,
}
`;

exports[`@conditions: browser/UrlEquals.getResult() S02B: should return a passed result if not is true 1`] = `
Object {
  "actual": "http://localhost:8080/login",
  "expected": "http://localhost:8080/",
  "message": "
  Condition: UrlEquals 
  Result: Success
  Expected (Not): http://localhost:8080/
  Actual: http://localhost:8080/login",
  "name": "UrlEquals",
  "passed": true,
}
`;

exports[`@conditions: browser/UrlEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "http://localhost:8080/login",
  "expected": "http://localhost:8080/logout",
  "message": "
  Condition: UrlEquals 
  Result: Failed
  Expected: http://localhost:8080/logout
  Actual: http://localhost:8080/login",
  "name": "UrlEquals",
  "passed": false,
}
`;

exports[`@conditions: browser/UrlEquals.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "http://localhost:8080/login",
  "message": "
  Condition: UrlEquals 
  Result: Failed
  Expected: http://localhost:8080/login
  Actual: message",
  "name": "UrlEquals",
  "passed": false,
}
`;
