// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/WindowCountEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "WindowCountEquals",
  false,
  undefined,
  1,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
]
`;

exports[`@conditions: browser/WindowCountEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": 1,
  "expected": 1,
  "message": "
  Condition: WindowCountEquals 
  Result: Success
  Expected: 1
  Actual: 1",
  "name": "WindowCountEquals",
  "passed": true,
}
`;

exports[`@conditions: browser/WindowCountEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": 1,
  "expected": 2,
  "message": "
  Condition: WindowCountEquals 
  Result: Success
  Expected (Not): 2
  Actual: 1",
  "name": "WindowCountEquals",
  "passed": true,
}
`;

exports[`@conditions: browser/WindowCountEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": 1,
  "expected": 2,
  "message": "
  Condition: WindowCountEquals 
  Result: Failed
  Expected: 2
  Actual: 1",
  "name": "WindowCountEquals",
  "passed": false,
}
`;

exports[`@conditions: browser/WindowCountEquals.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "Cannot read properties of undefined (reading 'length')",
  "expected": 2,
  "message": "
  Condition: WindowCountEquals 
  Result: Failed
  Expected: 2
  Actual: Cannot read properties of undefined (reading 'length')",
  "name": "WindowCountEquals",
  "passed": false,
}
`;
