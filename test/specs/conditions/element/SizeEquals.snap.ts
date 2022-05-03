// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/SizeEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "SizeEquals",
  false,
  undefined,
  "1px x 2px",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
]
`;

exports[`@conditions: element/SizeEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "1px x 2px",
  "expected": "1px x 2px",
  "message": "
  Condition: SizeEquals 
  Selector: #selector
  Result: Success
  Expected: 1px x 2px
  Actual: 1px x 2px",
  "name": "SizeEquals",
  "passed": true,
}
`;

exports[`@conditions: element/SizeEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "1px x 2px",
  "expected": "2px x 1px",
  "message": "
  Condition: SizeEquals 
  Selector: #selector
  Result: Success
  Expected (Not): 2px x 1px
  Actual: 1px x 2px",
  "name": "SizeEquals",
  "passed": true,
}
`;

exports[`@conditions: element/SizeEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "1px x 2px",
  "expected": "2px x 1px",
  "message": "
  Condition: SizeEquals 
  Selector: #selector
  Result: Failed
  Expected: 2px x 1px
  Actual: 1px x 2px",
  "name": "SizeEquals",
  "passed": false,
}
`;

exports[`@conditions: element/SizeEquals.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "1px x 2px",
  "message": "
  Condition: SizeEquals 
  Selector: #selector
  Result: Failed
  Expected: 1px x 2px
  Actual: message",
  "name": "SizeEquals",
  "passed": false,
}
`;
