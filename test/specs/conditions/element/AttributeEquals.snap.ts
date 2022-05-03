// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/AttributeEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "AttributeEquals",
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

exports[`@conditions: others/AttributeEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "bar",
  "expected": "bar",
  "message": "
  Condition: AttributeEquals [foo] 
  Selector: #selector
  Result: Success
  Expected: bar
  Actual: bar",
  "name": "AttributeEquals",
  "passed": true,
}
`;

exports[`@conditions: others/AttributeEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "bar",
  "expected": "",
  "message": "
  Condition: AttributeEquals [foo] 
  Selector: #selector
  Result: Success
  Expected (Not): 
  Actual: bar",
  "name": "AttributeEquals",
  "passed": true,
}
`;

exports[`@conditions: others/AttributeEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "bar",
  "expected": "any",
  "message": "
  Condition: AttributeEquals [foo] 
  Selector: #selector
  Result: Failed
  Expected: any
  Actual: bar",
  "name": "AttributeEquals",
  "passed": false,
}
`;

exports[`@conditions: others/AttributeEquals.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "any",
  "message": "
  Condition: AttributeEquals [foo] 
  Selector: #selector
  Result: Failed
  Expected: any
  Actual: message",
  "name": "AttributeEquals",
  "passed": false,
}
`;
