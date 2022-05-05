// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@conditions: browser/SnapshotMatch constructor S01: should set properties upon instantiation 1`] = `
Array [
  "SnapshotMatch",
  false,
  5000,
  "Within 0% difference",
  undefined,
  undefined,
  undefined,
  "default/google-chrome/any.png",
  undefined,
  "default/google-chrome/any.png",
  Object {
    "actualDir": "ouput/actual",
    "baselineDir": "ouput/baseline",
    "diffDir": "ouput/diff",
    "ignoreAntialiasing": true,
    "outDir": "ouput",
    "returnAllCompareData": true,
    "saveAboveTolerance": 0,
    "skipCompare": false,
    "usePlatformDir": false,
  },
  "element",
]
`;

exports[`@conditions: browser/SnapshotMatch.buildFilename() S01: should build the filename depending on available browser capabilities 1`] = `"default/google-chrome/any.png"`;

exports[`@conditions: browser/SnapshotMatch.buildFilename() S02: should build the filename for mobile if device name is found 1`] = `"default/google-chrome_google pixel 6/any.png"`;

exports[`@conditions: browser/SnapshotMatch.buildFilename() S03: should build the filename for specific platform if usePlatformDir is true 1`] = `"default_lin/google-chrome/any.png"`;

exports[`@conditions: browser/SnapshotMatch.compare() S01: should compare the element snapshot 1`] = `
Object {
  "misMatchPercentage": 0,
}
`;

exports[`@conditions: browser/SnapshotMatch.compare() S02: should compare the page snapshot 1`] = `
Object {
  "misMatchPercentage": 0,
}
`;

exports[`@conditions: browser/SnapshotMatch.compare() S03: should compare the viewport snapshot 1`] = `
Object {
  "misMatchPercentage": 0,
}
`;

exports[`@conditions: browser/SnapshotMatch.compare() S04: should assign an error prop on the compare result if an error is encountered 1`] = `
Object {
  "error": [Error: message],
  "misMatchPercentage": 0,
}
`;

exports[`@conditions: browser/SnapshotMatch.compare() S05: should skip comparison if skipCompare is true 1`] = `
Object {
  "misMatchPercentage": 0,
}
`;

exports[`@conditions: browser/SnapshotMatch.getResult() S01: should return a passed result 1`] = `
Object {
  "actual": "0% difference",
  "expected": "Within 0% difference",
  "message": "
  Condition: SnapshotMatch [default/google-chrome/any.png] 
  Result: Success
  Expected: Within 0% difference
  Actual: 0% difference",
  "name": "SnapshotMatch",
  "passed": true,
}
`;

exports[`@conditions: browser/SnapshotMatch.getResult() S02: should return a passed result if not is true 1`] = `
Object {
  "actual": "0.1% difference",
  "expected": "Within 0% difference",
  "message": "
  Condition: SnapshotMatch [default/google-chrome/any.png] 
  Result: Success
  Expected (Not): Within 0% difference
  Actual: 0.1% difference",
  "name": "SnapshotMatch",
  "passed": true,
}
`;

exports[`@conditions: browser/SnapshotMatch.getResult() S03: should return a failed result if condition is not met 1`] = `
Object {
  "actual": "0.1% difference",
  "expected": "Within 0% difference",
  "message": "
  Condition: SnapshotMatch [default/google-chrome/any.png] 
  Result: Failed
  Expected: Within 0% difference
  Actual: 0.1% difference",
  "name": "SnapshotMatch",
  "passed": false,
}
`;

exports[`@conditions: browser/SnapshotMatch.getResult() S04: should return a failed result if an error is encountered 1`] = `
Object {
  "actual": "message",
  "expected": "Within 0% difference",
  "message": "
  Condition: SnapshotMatch [default/google-chrome/undefined.png] 
  Result: Failed
  Expected: Within 0% difference
  Actual: message",
  "name": "SnapshotMatch",
  "passed": false,
}
`;

exports[`@conditions: browser/SnapshotMatch.getResult() S05: should return a failed result if diff error is defined 1`] = `
Object {
  "actual": [Error: message],
  "expected": "Within 0% difference",
  "message": "
  Condition: SnapshotMatch [default/google-chrome/any.png] 
  Result: Failed
  Expected: Within 0% difference
  Actual: Error: message",
  "name": "SnapshotMatch",
  "passed": false,
}
`;

exports[`@conditions: browser/SnapshotMatch.getResult() S06: should return a passed result if skipCompare is true 1`] = `
Object {
  "actual": "0.1% difference",
  "expected": "Within 0% difference",
  "message": "
  Condition: SnapshotMatch [default/google-chrome/any.png] 
  Result: Success
  Expected: Within 0% difference
  Actual: 0.1% difference",
  "name": "SnapshotMatch",
  "passed": true,
}
`;
