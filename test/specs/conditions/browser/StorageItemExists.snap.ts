// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/StorageItemExists constructor S01: should set properties upon instantiation 1`] = `
Array [
  "StorageItemExists",
  false,
  undefined,
  true,
  undefined,
  undefined,
  undefined,
  "Storage Item (local): any",
  undefined,
  "any",
]
`;

exports[`@conditions: browser/StorageItemExists.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": true,
  "expected": true,
  "message": "
  Condition: StorageItemExists [Storage Item (local): any] 
  Result: Success
  Expected: true
  Actual: true",
  "name": "StorageItemExists",
  "passed": true,
}
`;

exports[`@conditions: browser/StorageItemExists.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: StorageItemExists [Storage Item (session): any] 
  Result: Success
  Expected (Not): true
  Actual: false",
  "name": "StorageItemExists",
  "passed": true,
}
`;

exports[`@conditions: browser/StorageItemExists.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": false,
  "expected": true,
  "message": "
  Condition: StorageItemExists [Storage Item (local): any] 
  Result: Failed
  Expected: true
  Actual: false",
  "name": "StorageItemExists",
  "passed": false,
}
`;

exports[`@conditions: browser/StorageItemExists.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": true,
  "message": "
  Condition: StorageItemExists [Storage Item (local): any] 
  Result: Failed
  Expected: true
  Actual: message",
  "name": "StorageItemExists",
  "passed": false,
}
`;
