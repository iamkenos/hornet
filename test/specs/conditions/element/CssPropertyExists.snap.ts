// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/CssPropertyExists constructor S01: should set properties upon instantiation 1`] = `
Array [
  "CssPropertyExists",
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

exports[`@conditions: element/CssPropertyExists.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": true,
  "expected": true,
  "message": "
  Condition: CssPropertyExists [foo] 
  Selector: #selector
  Result: Success
  Expected: true
  Actual: true",
  "name": "CssPropertyExists",
  "passed": true,
}
`;

exports[`@conditions: element/CssPropertyExists.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: CssPropertyExists [foo] 
  Selector: #selector
  Result: Success
  Expected (Not): true
  Actual: false",
  "name": "CssPropertyExists",
  "passed": true,
}
`;

exports[`@conditions: element/CssPropertyExists.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: CssPropertyExists [foo] 
  Selector: #selector
  Result: Failed
  Expected: true
  Actual: false",
  "name": "CssPropertyExists",
  "passed": false,
}
`;

exports[`@conditions: element/CssPropertyExists.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": true,
  "message": "
  Condition: CssPropertyExists [foo] 
  Selector: #selector
  Result: Failed
  Expected: true
  Actual: message",
  "name": "CssPropertyExists",
  "passed": false,
}
`;
