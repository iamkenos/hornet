// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/DocumentReady.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "complete",
  "expected": "complete",
  "message": "
  Condition: DocumentReady 
  Result: Success
  Expected: complete
  Actual: complete",
  "name": "DocumentReady",
  "passed": true,
}
`;

exports[`@conditions: browser/DocumentReady.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "foo",
  "expected": "complete",
  "message": "
  Condition: DocumentReady 
  Result: Success
  Expected (Not): complete
  Actual: foo",
  "name": "DocumentReady",
  "passed": true,
}
`;

exports[`@conditions: browser/DocumentReady.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "foo",
  "expected": "complete",
  "message": "
  Condition: DocumentReady 
  Result: Failed
  Expected: complete
  Actual: foo",
  "name": "DocumentReady",
  "passed": false,
}
`;

exports[`@conditions: browser/DocumentReady.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "complete",
  "message": "
  Condition: DocumentReady 
  Result: Failed
  Expected: complete
  Actual: message",
  "name": "DocumentReady",
  "passed": false,
}
`;

exports[`@conditions: element/DocumentReady constructor S01: should set properties upon instantiation 1`] = `
Array [
  "DocumentReady",
  false,
  undefined,
  "complete",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
]
`;
