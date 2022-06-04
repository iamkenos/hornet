// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: others/StringEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "StringEquals",
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

exports[`@conditions: others/StringEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "any",
  "expected": "any",
  "message": "
  Condition: StringEquals 
  Result: Success
  Expected: any
  Actual: any",
  "name": "StringEquals",
  "passed": true,
}
`;

exports[`@conditions: others/StringEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "any",
  "expected": "foo",
  "message": "
  Condition: StringEquals 
  Result: Success
  Expected (Not): foo
  Actual: any",
  "name": "StringEquals",
  "passed": true,
}
`;

exports[`@conditions: others/StringEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "any",
  "expected": "foo",
  "message": "
  Condition: StringEquals 
  Result: Failed
  Expected: foo
  Actual: any",
  "name": "StringEquals",
  "passed": false,
}
`;
