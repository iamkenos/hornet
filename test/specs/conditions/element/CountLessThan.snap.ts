// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: element/CountLessThan constructor S01: should set properties upon instantiation 1`] = `
Array [
  "CountLessThan",
  false,
  undefined,
  1,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
]
`;

exports[`@conditions: element/CountLessThan.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": 0,
  "expected": 1,
  "message": "
  Condition: CountLessThan 
  Selector: #selector
  Result: Success
  Expected: 1
  Actual: 0",
  "name": "CountLessThan",
  "passed": true,
}
`;

exports[`@conditions: element/CountLessThan.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": 2,
  "expected": 1,
  "message": "
  Condition: CountLessThan 
  Selector: #selector
  Result: Success
  Expected (Not): 1
  Actual: 2",
  "name": "CountLessThan",
  "passed": true,
}
`;

exports[`@conditions: element/CountLessThan.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": 2,
  "expected": 1,
  "message": "
  Condition: CountLessThan 
  Selector: #selector
  Result: Failed
  Expected: 1
  Actual: 2",
  "name": "CountLessThan",
  "passed": false,
}
`;

exports[`@conditions: element/CountLessThan.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": 1,
  "message": "
  Condition: CountLessThan 
  Selector: #selector
  Result: Failed
  Expected: 1
  Actual: message",
  "name": "CountLessThan",
  "passed": false,
}
`;
