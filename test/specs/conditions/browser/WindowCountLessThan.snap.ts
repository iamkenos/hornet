// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/WindowCountLessThan.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": 0,
  "expected": 1,
  "message": "
  Condition: WindowCountLessThan 
  Result: Success
  Expected: 1
  Actual: 0",
  "name": "WindowCountLessThan",
  "passed": true,
}
`;

exports[`@conditions: browser/WindowCountLessThan.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": 2,
  "expected": 1,
  "message": "
  Condition: WindowCountLessThan 
  Result: Success
  Expected (Not): 1
  Actual: 2",
  "name": "WindowCountLessThan",
  "passed": true,
}
`;

exports[`@conditions: browser/WindowCountLessThan.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": 2,
  "expected": 1,
  "message": "
  Condition: WindowCountLessThan 
  Result: Failed
  Expected: 1
  Actual: 2",
  "name": "WindowCountLessThan",
  "passed": false,
}
`;

exports[`@conditions: browser/WindowCountLessThan.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "Cannot read properties of undefined (reading 'length')",
  "expected": 1,
  "message": "
  Condition: WindowCountLessThan 
  Result: Failed
  Expected: 1
  Actual: Cannot read properties of undefined (reading 'length')",
  "name": "WindowCountLessThan",
  "passed": false,
}
`;

exports[`@conditions: element/WindowCountLessThan constructor S01: should set properties upon instantiation 1`] = `
Array [
  "WindowCountLessThan",
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
