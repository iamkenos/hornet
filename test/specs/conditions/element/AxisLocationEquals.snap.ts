// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/AxisLocationEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "AxisLocationEquals",
  false,
  undefined,
  1,
  undefined,
  undefined,
  undefined,
  "x",
  undefined,
]
`;

exports[`@conditions: element/AxisLocationEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": 1,
  "expected": 1,
  "message": "
  Condition: AxisLocationEquals [x] 
  Selector: #selector
  Result: Success
  Expected: 1
  Actual: 1",
  "name": "AxisLocationEquals",
  "passed": true,
}
`;

exports[`@conditions: element/AxisLocationEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": 2,
  "expected": 1,
  "message": "
  Condition: AxisLocationEquals [x] 
  Selector: #selector
  Result: Success
  Expected (Not): 1
  Actual: 2",
  "name": "AxisLocationEquals",
  "passed": true,
}
`;

exports[`@conditions: element/AxisLocationEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": 2,
  "expected": 1,
  "message": "
  Condition: AxisLocationEquals [x] 
  Selector: #selector
  Result: Failed
  Expected: 1
  Actual: 2",
  "name": "AxisLocationEquals",
  "passed": false,
}
`;

exports[`@conditions: element/AxisLocationEquals.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": 1,
  "message": "
  Condition: AxisLocationEquals [x] 
  Selector: #selector
  Result: Failed
  Expected: 1
  Actual: message",
  "name": "AxisLocationEquals",
  "passed": false,
}
`;
