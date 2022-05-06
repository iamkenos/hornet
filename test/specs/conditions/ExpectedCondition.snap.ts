// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: ExpectedCondition constructor S01: should set properties upon instantiation 1`] = `
Array [
  "Condition",
  false,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
]
`;

exports[`@conditions: ExpectedCondition.evaluate() constructor S01: should return a passed result 1`] = `
Object {
  "actual": "any",
  "expected": "any",
  "message": "
  Condition: Condition 
  Selector: any
  Index: 2
  Result: Success
  Expected: any
  Actual: any",
  "name": "Condition",
  "passed": true,
}
`;

exports[`@conditions: ExpectedCondition.evaluate() constructor S02: should return a failed result 1`] = `
Object {
  "actual": Array [
    "any",
  ],
  "expected": Array [
    "any",
  ],
  "message": "
  Condition: Condition [any] 
  Result: Failed
  Expected (Not): 
    any
  Actual: 
    any",
  "name": "Condition",
  "passed": false,
}
`;

exports[`@conditions: ExpectedCondition.setElement() S01: should set the element property value 1`] = `
Object {
  "selector": "any",
}
`;
