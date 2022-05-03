// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/ValueEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "ValueEquals",
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

exports[`@conditions: element/ValueEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "foo",
  "expected": "foo",
  "message": "
  Condition: ValueEquals 
  Selector: #selector
  Result: Success
  Expected: foo
  Actual: foo",
  "name": "ValueEquals",
  "passed": true,
}
`;

exports[`@conditions: element/ValueEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "bar",
  "expected": "foo",
  "message": "
  Condition: ValueEquals 
  Selector: #selector
  Result: Success
  Expected (Not): foo
  Actual: bar",
  "name": "ValueEquals",
  "passed": true,
}
`;

exports[`@conditions: element/ValueEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "bar",
  "expected": "",
  "message": "
  Condition: ValueEquals 
  Selector: #selector
  Result: Failed
  Expected: 
  Actual: bar",
  "name": "ValueEquals",
  "passed": false,
}
`;

exports[`@conditions: element/ValueEquals.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "foo",
  "message": "
  Condition: ValueEquals 
  Selector: #selector
  Result: Failed
  Expected: foo
  Actual: message",
  "name": "ValueEquals",
  "passed": false,
}
`;
