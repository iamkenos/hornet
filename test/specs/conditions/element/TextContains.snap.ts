// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/TextContains constructor S01: should set properties upon instantiation 1`] = `
Array [
  "TextContains",
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

exports[`@conditions: element/TextContains.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "bar",
  "expected": "",
  "message": "
  Condition: TextContains 
  Selector: #selector
  Result: Success
  Expected: 
  Actual: bar",
  "name": "TextContains",
  "passed": true,
}
`;

exports[`@conditions: element/TextContains.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "bar",
  "expected": "foo",
  "message": "
  Condition: TextContains 
  Selector: #selector
  Result: Success
  Expected (Not): foo
  Actual: bar",
  "name": "TextContains",
  "passed": true,
}
`;

exports[`@conditions: element/TextContains.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "bar",
  "expected": "foo",
  "message": "
  Condition: TextContains 
  Selector: #selector
  Result: Failed
  Expected: foo
  Actual: bar",
  "name": "TextContains",
  "passed": false,
}
`;

exports[`@conditions: element/TextContains.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "foo",
  "message": "
  Condition: TextContains 
  Selector: #selector
  Result: Failed
  Expected: foo
  Actual: message",
  "name": "TextContains",
  "passed": false,
}
`;
