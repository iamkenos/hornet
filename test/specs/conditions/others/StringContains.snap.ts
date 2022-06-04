// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: others/StringContains constructor S01: should set properties upon instantiation 1`] = `
Array [
  "StringContains",
  false,
  undefined,
  "any",
  "any",
  undefined,
  undefined,
  undefined,
  undefined,
]
`;

exports[`@conditions: others/StringContains.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "an",
  "expected": "any",
  "message": "
  Condition: StringContains 
  Result: Success
  Expected: any
  Actual: an",
  "name": "StringContains",
  "passed": true,
}
`;

exports[`@conditions: others/StringContains.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "any",
  "expected": "an",
  "message": "
  Condition: StringContains 
  Result: Success
  Expected (Not): an
  Actual: any",
  "name": "StringContains",
  "passed": true,
}
`;

exports[`@conditions: others/StringContains.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "any",
  "expected": "an",
  "message": "
  Condition: StringContains 
  Result: Failed
  Expected: an
  Actual: any",
  "name": "StringContains",
  "passed": false,
}
`;
