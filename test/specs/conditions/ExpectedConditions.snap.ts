// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: ExpectedConditions constructor S01: should set properties upon instantiation 1`] = `
Array [
  "any",
  Array [],
  Map {},
  5000,
]
`;

exports[`@conditions: ExpectedConditions.addCondition() S01: should add a new condition 1`] = `
ExpectedConditions {
  "conditions": Array [
    Condition {
      "name": "Condition",
      "not": false,
      "timeout": 5000,
    },
  ],
  "evaluations": Map {},
  "name": "ExpectedConditions",
  "timeout": 5000,
}
`;

exports[`@conditions: ExpectedConditions.evaluate() S01: should return the result on evaluate 1`] = `"any"`;

exports[`@conditions: ExpectedConditions.evaluate() S02: should return the result even if an error is encountered 1`] = `"any"`;

exports[`@conditions: ExpectedConditions.expect() S01: should return the result on expect if result is passed 1`] = `
Object {
  "evaluations": Array [
    Object {
      "actual": undefined,
      "expected": undefined,
      "message": "
  Condition: Condition 
  Result: Failed
  Expected: undefined
  Actual: undefined",
      "name": "Condition",
      "passed": undefined,
    },
  ],
  "message": "1/1 expected conditions not met after waiting for 5000:
Expression: ExpectedConditions

  Condition: Condition 
  Result: Failed
  Expected: undefined
  Actual: undefined",
  "passed": false,
}
`;

exports[`@conditions: ExpectedConditions.expect() S02: should return the result on expect if result is passed with actions set 1`] = `
Object {
  "evaluations": Array [
    Object {
      "actual": undefined,
      "expected": undefined,
      "message": "
  Condition: Condition 
  Result: Failed
  Expected: undefined
  Actual: undefined",
      "name": "Condition",
      "passed": undefined,
    },
  ],
  "message": "1/1 expected conditions not met after waiting for 5000:
Expression: ExpectedConditions

  Condition: Condition 
  Result: Failed
  Expected: undefined
  Actual: undefined",
  "passed": false,
}
`;

exports[`@conditions: ExpectedConditions.getResult() S01: should get the result 1`] = `
Object {
  "evaluations": Array [
    "any",
  ],
  "message": "1/1 expected conditions not met after waiting for 5000:
Expression: ExpectedConditions
",
  "passed": false,
}
`;

exports[`@conditions: ExpectedConditions.setAction() S01: should set the action property value 1`] = `
ExpectedConditions {
  "action": [Function],
  "conditions": Array [],
  "evaluations": Map {},
  "name": "ExpectedConditions",
  "timeout": 5000,
}
`;

exports[`@conditions: ExpectedConditions.setName() S01: should set the name property value 1`] = `
ExpectedConditions {
  "conditions": Array [],
  "evaluations": Map {},
  "name": "any",
  "timeout": 5000,
}
`;

exports[`@conditions: ExpectedConditions.setTimeout() S01: should set the timeout property value 1`] = `
ExpectedConditions {
  "conditions": Array [],
  "evaluations": Map {},
  "name": "ExpectedConditions",
  "timeout": 1,
}
`;
