// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: others/ArrayEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "ArrayEquals",
  false,
  undefined,
  Array [
    "1",
  ],
  Array [
    "1",
  ],
  undefined,
  undefined,
  undefined,
  undefined,
]
`;

exports[`@conditions: others/ArrayEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": Array [
    "1",
  ],
  "expected": Array [
    "1",
  ],
  "message": "
  Condition: ArrayEquals 
  Result: Success
  Expected: 
    1
  Actual: 
    1",
  "name": "ArrayEquals",
  "passed": true,
}
`;

exports[`@conditions: others/ArrayEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": Array [
    "1",
  ],
  "expected": Array [
    1,
  ],
  "message": "
  Condition: ArrayEquals 
  Result: Success
  Expected (Not): 
    1
  Actual: 
    1",
  "name": "ArrayEquals",
  "passed": true,
}
`;

exports[`@conditions: others/ArrayEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": Array [
    "1",
  ],
  "expected": Array [
    1,
  ],
  "message": "
  Condition: ArrayEquals 
  Result: Failed
  Expected: 
    1
  Actual: 
    1",
  "name": "ArrayEquals",
  "passed": false,
}
`;

exports[`@conditions: others/ArrayEquals.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": Array [
    "1",
  ],
  "message": "
  Condition: ArrayEquals 
  Result: Failed
  Expected: 
    1
  Actual: message",
  "name": "ArrayEquals",
  "passed": false,
}
`;
