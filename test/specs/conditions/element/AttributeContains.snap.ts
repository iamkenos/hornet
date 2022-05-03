// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/AttributeContains constructor S01: should set properties upon instantiation 1`] = `
Array [
  "AttributeContains",
  false,
  undefined,
  "any",
  undefined,
  undefined,
  undefined,
  "any",
  undefined,
]
`;

exports[`@conditions: others/AttributeContains.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "bar",
  "expected": "",
  "message": "
  Condition: AttributeContains [foo] 
  Selector: #selector
  Result: Success
  Expected: 
  Actual: bar",
  "name": "AttributeContains",
  "passed": true,
}
`;

exports[`@conditions: others/AttributeContains.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "bar",
  "expected": "any",
  "message": "
  Condition: AttributeContains [foo] 
  Selector: #selector
  Result: Success
  Expected (Not): any
  Actual: bar",
  "name": "AttributeContains",
  "passed": true,
}
`;

exports[`@conditions: others/AttributeContains.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "bar",
  "expected": "any",
  "message": "
  Condition: AttributeContains [foo] 
  Selector: #selector
  Result: Failed
  Expected: any
  Actual: bar",
  "name": "AttributeContains",
  "passed": false,
}
`;

exports[`@conditions: others/AttributeContains.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "any",
  "message": "
  Condition: AttributeContains [foo] 
  Selector: #selector
  Result: Failed
  Expected: any
  Actual: message",
  "name": "AttributeContains",
  "passed": false,
}
`;
