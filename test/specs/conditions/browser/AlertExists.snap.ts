// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/AlertExists constructor S01: should set properties upon instantiation 1`] = `
Array [
  "AlertExists",
  false,
  undefined,
  true,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
]
`;

exports[`@conditions: browser/AlertExists.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": true,
  "expected": true,
  "message": "
  Condition: AlertExists 
  Result: Success
  Expected: true
  Actual: true",
  "name": "AlertExists",
  "passed": true,
}
`;

exports[`@conditions: browser/AlertExists.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "Cannot read properties of undefined (reading 'length')",
  "expected": true,
  "message": "
  Condition: AlertExists 
  Result: Success
  Expected (Not): true
  Actual: Cannot read properties of undefined (reading 'length')",
  "name": "AlertExists",
  "passed": true,
}
`;

exports[`@conditions: browser/AlertExists.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "Cannot read properties of undefined (reading 'length')",
  "expected": true,
  "message": "
  Condition: AlertExists 
  Result: Failed
  Expected: true
  Actual: Cannot read properties of undefined (reading 'length')",
  "name": "AlertExists",
  "passed": false,
}
`;

exports[`@conditions: browser/AlertExists.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": true,
  "message": "
  Condition: AlertExists 
  Result: Failed
  Expected: true
  Actual: message",
  "name": "AlertExists",
  "passed": false,
}
`;
