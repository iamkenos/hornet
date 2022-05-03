// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/TextEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "TextEquals",
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

exports[`@conditions: element/TextEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "foo",
  "expected": "foo",
  "message": "
  Condition: TextEquals 
  Selector: #selector
  Result: Success
  Expected: foo
  Actual: foo",
  "name": "TextEquals",
  "passed": true,
}
`;

exports[`@conditions: element/TextEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "bar",
  "expected": "foo",
  "message": "
  Condition: TextEquals 
  Selector: #selector
  Result: Success
  Expected (Not): foo
  Actual: bar",
  "name": "TextEquals",
  "passed": true,
}
`;

exports[`@conditions: element/TextEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "bar",
  "expected": "",
  "message": "
  Condition: TextEquals 
  Selector: #selector
  Result: Failed
  Expected: 
  Actual: bar",
  "name": "TextEquals",
  "passed": false,
}
`;

exports[`@conditions: element/TextEquals.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "foo",
  "message": "
  Condition: TextEquals 
  Selector: #selector
  Result: Failed
  Expected: foo
  Actual: message",
  "name": "TextEquals",
  "passed": false,
}
`;
