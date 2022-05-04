// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/AlertTextEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "foo",
  "expected": "foo",
  "message": "
  Condition: AlertTextEquals 
  Result: Success
  Expected: foo
  Actual: foo",
  "name": "AlertTextEquals",
  "passed": true,
}
`;

exports[`@conditions: browser/AlertTextEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "bar",
  "expected": "foo",
  "message": "
  Condition: AlertTextEquals 
  Result: Success
  Expected (Not): foo
  Actual: bar",
  "name": "AlertTextEquals",
  "passed": true,
}
`;

exports[`@conditions: browser/AlertTextEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "bar",
  "expected": "foo",
  "message": "
  Condition: AlertTextEquals 
  Result: Failed
  Expected: foo
  Actual: bar",
  "name": "AlertTextEquals",
  "passed": false,
}
`;

exports[`@conditions: browser/AlertTextEquals.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "foo",
  "message": "
  Condition: AlertTextEquals 
  Result: Failed
  Expected: foo
  Actual: message",
  "name": "AlertTextEquals",
  "passed": false,
}
`;

exports[`@conditions: element/AlertTextEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "AlertTextEquals",
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
