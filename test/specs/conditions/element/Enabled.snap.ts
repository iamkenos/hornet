// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/Enabled constructor S01: should set properties upon instantiation 1`] = `
Array [
  "Enabled",
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

exports[`@conditions: element/Enabled.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": true,
  "expected": true,
  "message": "
  Condition: Enabled 
  Selector: #selector
  Result: Success
  Expected: true
  Actual: true",
  "name": "Enabled",
  "passed": true,
}
`;

exports[`@conditions: element/Enabled.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: Enabled 
  Selector: #selector
  Result: Success
  Expected (Not): true
  Actual: false",
  "name": "Enabled",
  "passed": true,
}
`;

exports[`@conditions: element/Enabled.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: Enabled 
  Selector: #selector
  Result: Failed
  Expected: true
  Actual: false",
  "name": "Enabled",
  "passed": false,
}
`;

exports[`@conditions: element/Enabled.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": true,
  "message": "
  Condition: Enabled 
  Selector: #selector
  Result: Failed
  Expected: true
  Actual: message",
  "name": "Enabled",
  "passed": false,
}
`;
