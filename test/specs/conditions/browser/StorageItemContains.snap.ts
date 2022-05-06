// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/StorageItemContains constructor S01: should set properties upon instantiation 1`] = `
Array [
  "StorageItemContains",
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

exports[`@conditions: browser/StorageItemContains.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "foo",
  "expected": "",
  "message": "
  Condition: StorageItemContains [Storage Item (local): any] 
  Result: Success
  Expected: 
  Actual: foo",
  "name": "StorageItemContains",
  "passed": true,
}
`;

exports[`@conditions: browser/StorageItemContains.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "foo",
  "expected": "bar",
  "message": "
  Condition: StorageItemContains [Storage Item (session): any] 
  Result: Success
  Expected (Not): bar
  Actual: foo",
  "name": "StorageItemContains",
  "passed": true,
}
`;

exports[`@conditions: browser/StorageItemContains.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "foo",
  "expected": "bar",
  "message": "
  Condition: StorageItemContains [Storage Item (local): any] 
  Result: Failed
  Expected: bar
  Actual: foo",
  "name": "StorageItemContains",
  "passed": false,
}
`;

exports[`@conditions: browser/StorageItemContains.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "bar",
  "message": "
  Condition: StorageItemContains [Storage Item (local): any] 
  Result: Failed
  Expected: bar
  Actual: message",
  "name": "StorageItemContains",
  "passed": false,
}
`;
