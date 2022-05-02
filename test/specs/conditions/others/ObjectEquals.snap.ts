// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: others/ObjectEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "ObjectEquals",
  false,
  undefined,
  Object {
    "any": "any",
  },
  Object {
    "any": "any",
  },
  undefined,
  undefined,
  undefined,
  undefined,
]
`;

exports[`@conditions: others/ObjectEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": Object {
    "any": "any",
  },
  "expected": Object {
    "any": "any",
  },
  "message": "
  Condition: ObjectEquals 
  Result: Success
  Expected: [object Object]
  Actual: [object Object]",
  "name": "ObjectEquals",
  "passed": true,
}
`;

exports[`@conditions: others/ObjectEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": Object {
    "any": "any",
  },
  "expected": Object {
    "any": "any",
    "foo": "foo",
  },
  "message": "
  Condition: ObjectEquals 
  Result: Success
  Expected (Not): [object Object]
  Actual: [object Object]",
  "name": "ObjectEquals",
  "passed": true,
}
`;

exports[`@conditions: others/ObjectEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": Object {
    "any": "any",
  },
  "expected": Object {
    "any": "any",
    "foo": "foo",
  },
  "message": "
  Condition: ObjectEquals 
  Result: Failed
  Expected: [object Object]
  Actual: [object Object]",
  "name": "ObjectEquals",
  "passed": false,
}
`;

exports[`@conditions: others/ObjectEquals.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": Object {
    "foo": "foo",
  },
  "message": "
  Condition: ObjectEquals 
  Result: Failed
  Expected: [object Object]
  Actual: message",
  "name": "ObjectEquals",
  "passed": false,
}
`;
