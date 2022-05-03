// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/SizeSideEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "SizeSideEquals",
  false,
  undefined,
  "1px",
  undefined,
  undefined,
  undefined,
  "width",
  undefined,
]
`;

exports[`@conditions: element/SizeSideEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "1px",
  "expected": "1px",
  "message": "
  Condition: SizeSideEquals [width] 
  Selector: #selector
  Result: Success
  Expected: 1px
  Actual: 1px",
  "name": "SizeSideEquals",
  "passed": true,
}
`;

exports[`@conditions: element/SizeSideEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "2px",
  "expected": "1px",
  "message": "
  Condition: SizeSideEquals [width] 
  Selector: #selector
  Result: Success
  Expected (Not): 1px
  Actual: 2px",
  "name": "SizeSideEquals",
  "passed": true,
}
`;

exports[`@conditions: element/SizeSideEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "2px",
  "expected": "1px",
  "message": "
  Condition: SizeSideEquals [width] 
  Selector: #selector
  Result: Failed
  Expected: 1px
  Actual: 2px",
  "name": "SizeSideEquals",
  "passed": false,
}
`;

exports[`@conditions: element/SizeSideEquals.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "1px",
  "message": "
  Condition: SizeSideEquals [width] 
  Selector: #selector
  Result: Failed
  Expected: 1px
  Actual: message",
  "name": "SizeSideEquals",
  "passed": false,
}
`;
