// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/Clickable constructor S01: should set properties upon instantiation 1`] = `
Array [
  "Clickable",
  false,
  undefined,
  true,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
]
`;

exports[`@conditions: element/Clickable.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": true,
  "expected": true,
  "message": "
  Condition: Clickable 
  Selector: #selector
  Result: Success
  Expected: true
  Actual: true",
  "name": "Clickable",
  "passed": true,
}
`;

exports[`@conditions: element/Clickable.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: Clickable 
  Selector: #selector
  Result: Success
  Expected (Not): true
  Actual: false",
  "name": "Clickable",
  "passed": true,
}
`;

exports[`@conditions: element/Clickable.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: Clickable 
  Selector: #selector
  Result: Failed
  Expected: true
  Actual: false",
  "name": "Clickable",
  "passed": false,
}
`;

exports[`@conditions: element/Clickable.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": true,
  "message": "
  Condition: Clickable 
  Selector: #selector
  Result: Failed
  Expected: true
  Actual: message",
  "name": "Clickable",
  "passed": false,
}
`;
