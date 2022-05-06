// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/CookieEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "CookieEquals",
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

exports[`@conditions: browser/CookieEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "foo",
  "expected": "foo",
  "message": "
  Condition: CookieEquals [foo] 
  Result: Success
  Expected: foo
  Actual: foo",
  "name": "CookieEquals",
  "passed": true,
}
`;

exports[`@conditions: browser/CookieEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "foo",
  "expected": "",
  "message": "
  Condition: CookieEquals [foo] 
  Result: Success
  Expected (Not): 
  Actual: foo",
  "name": "CookieEquals",
  "passed": true,
}
`;

exports[`@conditions: browser/CookieEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "foo",
  "expected": "bar",
  "message": "
  Condition: CookieEquals [foo] 
  Result: Failed
  Expected: bar
  Actual: foo",
  "name": "CookieEquals",
  "passed": false,
}
`;

exports[`@conditions: browser/CookieEquals.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "foo",
  "message": "
  Condition: CookieEquals [foo] 
  Result: Failed
  Expected: foo
  Actual: message",
  "name": "CookieEquals",
  "passed": false,
}
`;

exports[`@conditions: browser/CookieEquals.getResult() S05: should return a failed result if cookie is undefined 1`] = `
Object {
  "actual": undefined,
  "expected": "foo",
  "message": "
  Condition: CookieEquals [foo] 
  Result: Failed
  Expected: foo
  Actual: undefined",
  "name": "CookieEquals",
  "passed": false,
}
`;
