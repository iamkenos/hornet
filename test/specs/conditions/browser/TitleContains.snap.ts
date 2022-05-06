// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/TitleContains constructor S01: should set properties upon instantiation 1`] = `
Array [
  "TitleContains",
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

exports[`@conditions: browser/TitleContains.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "foo",
  "expected": "",
  "message": "
  Condition: TitleContains 
  Result: Success
  Expected: 
  Actual: foo",
  "name": "TitleContains",
  "passed": true,
}
`;

exports[`@conditions: browser/TitleContains.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "bar",
  "expected": "foo",
  "message": "
  Condition: TitleContains 
  Result: Success
  Expected (Not): foo
  Actual: bar",
  "name": "TitleContains",
  "passed": true,
}
`;

exports[`@conditions: browser/TitleContains.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "bar",
  "expected": "foo",
  "message": "
  Condition: TitleContains 
  Result: Failed
  Expected: foo
  Actual: bar",
  "name": "TitleContains",
  "passed": false,
}
`;

exports[`@conditions: browser/TitleContains.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "foo",
  "message": "
  Condition: TitleContains 
  Result: Failed
  Expected: foo
  Actual: message",
  "name": "TitleContains",
  "passed": false,
}
`;
