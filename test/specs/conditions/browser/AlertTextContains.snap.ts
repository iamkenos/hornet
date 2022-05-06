// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/AlertTextContains constructor S01: should set properties upon instantiation 1`] = `
Array [
  "AlertTextContains",
  false,
  undefined,
  "any",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
]
`;

exports[`@conditions: browser/AlertTextContains.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "foo",
  "expected": "foo",
  "message": "
  Condition: AlertTextContains 
  Result: Success
  Expected: foo
  Actual: foo",
  "name": "AlertTextContains",
  "passed": true,
}
`;

exports[`@conditions: browser/AlertTextContains.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "bar",
  "expected": "foo",
  "message": "
  Condition: AlertTextContains 
  Result: Success
  Expected (Not): foo
  Actual: bar",
  "name": "AlertTextContains",
  "passed": true,
}
`;

exports[`@conditions: browser/AlertTextContains.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "bar",
  "expected": "foo",
  "message": "
  Condition: AlertTextContains 
  Result: Failed
  Expected: foo
  Actual: bar",
  "name": "AlertTextContains",
  "passed": false,
}
`;

exports[`@conditions: browser/AlertTextContains.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "foo",
  "message": "
  Condition: AlertTextContains 
  Result: Failed
  Expected: foo
  Actual: message",
  "name": "AlertTextContains",
  "passed": false,
}
`;
