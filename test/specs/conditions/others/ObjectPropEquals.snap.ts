// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: others/ObjectPropEquals constructor S01: should set properties upon instantiation 1`] = `
Array [
  "ObjectPropEquals",
  false,
  undefined,
  "any",
  "any",
  undefined,
  undefined,
  "any",
  undefined,
]
`;

exports[`@conditions: others/ObjectPropEquals.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "any",
  "expected": "any",
  "message": "
  Condition: ObjectPropEquals [any] 
  Result: Success
  Expected: any
  Actual: any",
  "name": "ObjectPropEquals",
  "passed": true,
}
`;

exports[`@conditions: others/ObjectPropEquals.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "any",
  "expected": "foo",
  "message": "
  Condition: ObjectPropEquals [any] 
  Result: Success
  Expected (Not): foo
  Actual: any",
  "name": "ObjectPropEquals",
  "passed": true,
}
`;

exports[`@conditions: others/ObjectPropEquals.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "any",
  "expected": "foo",
  "message": "
  Condition: ObjectPropEquals [any] 
  Result: Failed
  Expected: foo
  Actual: any",
  "name": "ObjectPropEquals",
  "passed": false,
}
`;
