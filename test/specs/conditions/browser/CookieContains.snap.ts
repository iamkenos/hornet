// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/CookieContains constructor S01: should set properties upon instantiation 1`] = `
Array [
  "CookieContains",
  false,
  undefined,
  "any",
  undefined,
  undefined,
  undefined,
  "any",
  undefined,
]
`;

exports[`@conditions: browser/CookieContains.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "foo",
  "expected": "",
  "message": "
  Condition: CookieContains [foo] 
  Result: Success
  Expected: 
  Actual: foo",
  "name": "CookieContains",
  "passed": true,
}
`;

exports[`@conditions: browser/CookieContains.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "foo",
  "expected": "bar",
  "message": "
  Condition: CookieContains [foo] 
  Result: Success
  Expected (Not): bar
  Actual: foo",
  "name": "CookieContains",
  "passed": true,
}
`;

exports[`@conditions: browser/CookieContains.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "foo",
  "expected": "bar",
  "message": "
  Condition: CookieContains [foo] 
  Result: Failed
  Expected: bar
  Actual: foo",
  "name": "CookieContains",
  "passed": false,
}
`;

exports[`@conditions: browser/CookieContains.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "bar",
  "message": "
  Condition: CookieContains [foo] 
  Result: Failed
  Expected: bar
  Actual: message",
  "name": "CookieContains",
  "passed": false,
}
`;

exports[`@conditions: browser/CookieContains.getResult() S05: should return a failed result if cookie is undefined 1`] = `
Object {
  "actual": "Cannot read properties of undefined (reading 'includes')",
  "expected": "bar",
  "message": "
  Condition: CookieContains [foo] 
  Result: Failed
  Expected: bar
  Actual: Cannot read properties of undefined (reading 'includes')",
  "name": "CookieContains",
  "passed": false,
}
`;
