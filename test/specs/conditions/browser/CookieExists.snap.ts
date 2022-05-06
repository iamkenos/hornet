// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/CookieExists constructor S01: should set properties upon instantiation 1`] = `
Array [
  "CookieExists",
  false,
  undefined,
  true,
  undefined,
  undefined,
  undefined,
  "any",
  undefined,
]
`;

exports[`@conditions: browser/CookieExists.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": true,
  "expected": true,
  "message": "
  Condition: CookieExists [foo] 
  Result: Success
  Expected: true
  Actual: true",
  "name": "CookieExists",
  "passed": true,
}
`;

exports[`@conditions: browser/CookieExists.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: CookieExists [foo] 
  Result: Success
  Expected (Not): true
  Actual: false",
  "name": "CookieExists",
  "passed": true,
}
`;

exports[`@conditions: browser/CookieExists.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: CookieExists [foo] 
  Result: Failed
  Expected: true
  Actual: false",
  "name": "CookieExists",
  "passed": false,
}
`;

exports[`@conditions: browser/CookieExists.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": true,
  "message": "
  Condition: CookieExists [foo] 
  Result: Failed
  Expected: true
  Actual: message",
  "name": "CookieExists",
  "passed": false,
}
`;
