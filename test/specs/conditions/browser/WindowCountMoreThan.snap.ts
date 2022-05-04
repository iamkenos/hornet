// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/WindowCountMoreThan.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": 2,
  "expected": 1,
  "message": "
  Condition: WindowCountMoreThan 
  Result: Success
  Expected: 1
  Actual: 2",
  "name": "WindowCountMoreThan",
  "passed": true,
}
`;

exports[`@conditions: browser/WindowCountMoreThan.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": 1,
  "expected": 1,
  "message": "
  Condition: WindowCountMoreThan 
  Result: Success
  Expected (Not): 1
  Actual: 1",
  "name": "WindowCountMoreThan",
  "passed": true,
}
`;

exports[`@conditions: browser/WindowCountMoreThan.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": 1,
  "expected": 1,
  "message": "
  Condition: WindowCountMoreThan 
  Result: Failed
  Expected: 1
  Actual: 1",
  "name": "WindowCountMoreThan",
  "passed": false,
}
`;

exports[`@conditions: browser/WindowCountMoreThan.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "Cannot read properties of undefined (reading 'length')",
  "expected": 1,
  "message": "
  Condition: WindowCountMoreThan 
  Result: Failed
  Expected: 1
  Actual: Cannot read properties of undefined (reading 'length')",
  "name": "WindowCountMoreThan",
  "passed": false,
}
`;

exports[`@conditions: element/WindowCountMoreThan constructor S01: should set properties upon instantiation 1`] = `
Array [
  "WindowCountMoreThan",
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
