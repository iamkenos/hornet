// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/CountMoreThan constructor S01: should set properties upon instantiation 1`] = `
Array [
  "CountMoreThan",
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

exports[`@conditions: element/CountMoreThan.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": 2,
  "expected": 1,
  "message": "
  Condition: CountMoreThan 
  Selector: #selector
  Result: Success
  Expected: 1
  Actual: 2",
  "name": "CountMoreThan",
  "passed": true,
}
`;

exports[`@conditions: element/CountMoreThan.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": 1,
  "expected": 1,
  "message": "
  Condition: CountMoreThan 
  Selector: #selector
  Result: Success
  Expected (Not): 1
  Actual: 1",
  "name": "CountMoreThan",
  "passed": true,
}
`;

exports[`@conditions: element/CountMoreThan.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": 1,
  "expected": 1,
  "message": "
  Condition: CountMoreThan 
  Selector: #selector
  Result: Failed
  Expected: 1
  Actual: 1",
  "name": "CountMoreThan",
  "passed": false,
}
`;

exports[`@conditions: element/CountMoreThan.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": 1,
  "message": "
  Condition: CountMoreThan 
  Selector: #selector
  Result: Failed
  Expected: 1
  Actual: message",
  "name": "CountMoreThan",
  "passed": false,
}
`;
