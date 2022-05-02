// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: others/ArrayContains constructor S01: should set properties upon instantiation 1`] = `
Array [
  "ArrayContains",
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

exports[`@conditions: others/ArrayContains.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": Array [
    "0",
    "1",
  ],
  "expected": Array [
    "1",
  ],
  "message": "
  Condition: ArrayContains 
  Result: Success
  Expected: 
    1
  Actual: 
    0
    1",
  "name": "ArrayContains",
  "passed": true,
}
`;

exports[`@conditions: others/ArrayContains.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": Array [
    "1",
  ],
  "expected": Array [
    1,
  ],
  "message": "
  Condition: ArrayContains 
  Result: Success
  Expected (Not): 
    1
  Actual: 
    1",
  "name": "ArrayContains",
  "passed": true,
}
`;

exports[`@conditions: others/ArrayContains.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": Array [
    "1",
  ],
  "expected": Array [
    1,
  ],
  "message": "
  Condition: ArrayContains 
  Result: Failed
  Expected: 
    1
  Actual: 
    1",
  "name": "ArrayContains",
  "passed": false,
}
`;

exports[`@conditions: others/ArrayContains.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": Array [
    "1",
  ],
  "message": "
  Condition: ArrayContains 
  Result: Failed
  Expected: 
    1
  Actual: message",
  "name": "ArrayContains",
  "passed": false,
}
`;
