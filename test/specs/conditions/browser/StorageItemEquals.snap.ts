// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/StorageItemEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "StorageItemEquals",
  false,
  undefined,
  "any",
  undefined,
  undefined,
  undefined,
  "Storage Item (local): any",
  undefined,
  "any",
]
`;

exports[`@conditions: browser/StorageItemEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "foo",
  "expected": "foo",
  "message": "
  Condition: StorageItemEquals [Storage Item (local): any] 
  Result: Success
  Expected: foo
  Actual: foo",
  "name": "StorageItemEquals",
  "passed": true,
}
`;

exports[`@conditions: browser/StorageItemEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "foo",
  "expected": "",
  "message": "
  Condition: StorageItemEquals [Storage Item (session): any] 
  Result: Success
  Expected (Not): 
  Actual: foo",
  "name": "StorageItemEquals",
  "passed": true,
}
`;

exports[`@conditions: browser/StorageItemEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "foo",
  "expected": "bar",
  "message": "
  Condition: StorageItemEquals [Storage Item (local): any] 
  Result: Failed
  Expected: bar
  Actual: foo",
  "name": "StorageItemEquals",
  "passed": false,
}
`;

exports[`@conditions: browser/StorageItemEquals.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "bar",
  "message": "
  Condition: StorageItemEquals [Storage Item (local): any] 
  Result: Failed
  Expected: bar
  Actual: message",
  "name": "StorageItemEquals",
  "passed": false,
}
`;
