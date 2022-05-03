// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/DisplayedInViewport constructor S01: should set properties upon instantiation 1`] = `
Array [
  "DisplayedInViewport",
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

exports[`@conditions: element/DisplayedInViewport.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": true,
  "expected": true,
  "message": "
  Condition: DisplayedInViewport 
  Selector: #selector
  Result: Success
  Expected: true
  Actual: true",
  "name": "DisplayedInViewport",
  "passed": true,
}
`;

exports[`@conditions: element/DisplayedInViewport.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: DisplayedInViewport 
  Selector: #selector
  Result: Success
  Expected (Not): true
  Actual: false",
  "name": "DisplayedInViewport",
  "passed": true,
}
`;

exports[`@conditions: element/DisplayedInViewport.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: DisplayedInViewport 
  Selector: #selector
  Result: Failed
  Expected: true
  Actual: false",
  "name": "DisplayedInViewport",
  "passed": false,
}
`;

exports[`@conditions: element/DisplayedInViewport.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": true,
  "message": "
  Condition: DisplayedInViewport 
  Selector: #selector
  Result: Failed
  Expected: true
  Actual: message",
  "name": "DisplayedInViewport",
  "passed": false,
}
`;
