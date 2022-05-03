// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/Exists constructor S01: should set properties upon instantiation 1`] = `
Array [
  "Exists",
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

exports[`@conditions: element/Exists.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": true,
  "expected": true,
  "message": "
  Condition: Exists 
  Selector: #selector
  Result: Success
  Expected: true
  Actual: true",
  "name": "Exists",
  "passed": true,
}
`;

exports[`@conditions: element/Exists.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: Exists 
  Selector: #selector
  Result: Success
  Expected (Not): true
  Actual: false",
  "name": "Exists",
  "passed": true,
}
`;

exports[`@conditions: element/Exists.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: Exists 
  Selector: #selector
  Result: Failed
  Expected: true
  Actual: false",
  "name": "Exists",
  "passed": false,
}
`;

exports[`@conditions: element/Exists.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "false - message",
  "expected": true,
  "message": "
  Condition: Exists 
  Selector: #selector
  Result: Failed
  Expected: true
  Actual: false - message",
  "name": "Exists",
  "passed": false,
}
`;
