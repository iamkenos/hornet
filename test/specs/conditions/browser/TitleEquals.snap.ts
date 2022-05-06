// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/TitleEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "TitleEquals",
  false,
  undefined,
  "any",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
]
`;

exports[`@conditions: browser/TitleEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "foo",
  "expected": "foo",
  "message": "
  Condition: TitleEquals 
  Result: Success
  Expected: foo
  Actual: foo",
  "name": "TitleEquals",
  "passed": true,
}
`;

exports[`@conditions: browser/TitleEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "foo",
  "expected": "",
  "message": "
  Condition: TitleEquals 
  Result: Success
  Expected (Not): 
  Actual: foo",
  "name": "TitleEquals",
  "passed": true,
}
`;

exports[`@conditions: browser/TitleEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "bar",
  "expected": "foo",
  "message": "
  Condition: TitleEquals 
  Result: Failed
  Expected: foo
  Actual: bar",
  "name": "TitleEquals",
  "passed": false,
}
`;

exports[`@conditions: browser/TitleEquals.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "foo",
  "message": "
  Condition: TitleEquals 
  Result: Failed
  Expected: foo
  Actual: message",
  "name": "TitleEquals",
  "passed": false,
}
`;
