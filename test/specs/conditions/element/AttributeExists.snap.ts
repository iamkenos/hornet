// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/AttributeExists constructor S01: should set properties upon instantiation 1`] = `
Array [
  "AttributeExists",
  false,
  undefined,
  true,
  undefined,
  undefined,
  undefined,
  "any",
  undefined,
]
`;

exports[`@conditions: others/AttributeExists.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": true,
  "expected": true,
  "message": "
  Condition: AttributeExists [foo] 
  Selector: #selector
  Result: Success
  Expected: true
  Actual: true",
  "name": "AttributeExists",
  "passed": true,
}
`;

exports[`@conditions: others/AttributeExists.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: AttributeExists [foo] 
  Selector: #selector
  Result: Success
  Expected (Not): true
  Actual: false",
  "name": "AttributeExists",
  "passed": true,
}
`;

exports[`@conditions: others/AttributeExists.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: AttributeExists [foo] 
  Selector: #selector
  Result: Failed
  Expected: true
  Actual: false",
  "name": "AttributeExists",
  "passed": false,
}
`;

exports[`@conditions: others/AttributeExists.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": true,
  "message": "
  Condition: AttributeExists [foo] 
  Selector: #selector
  Result: Failed
  Expected: true
  Actual: message",
  "name": "AttributeExists",
  "passed": false,
}
`;
