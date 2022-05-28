// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@gherkin: utils/GherkinAdapter.getDataTableHashes() S01: should return the key-value pair of the data table 1`] = `
Array [
  Object {
    "Field": "InputText",
    "Value": "Sam Porter",
  },
  Object {
    "Field": "InputEmail",
    "Value": "samporter@bridges.com",
  },
  Object {
    "Field": "InputPassword",
    "Value": "unger",
  },
]
`;

exports[`@gherkin: utils/GherkinAdapter.getDataTableHashes() S02: should return the key-value pair of the data table in lowercase keys 1`] = `
Array [
  Object {
    "field": "InputText",
    "value": "Sam Porter",
  },
  Object {
    "field": "InputEmail",
    "value": "samporter@bridges.com",
  },
  Object {
    "field": "InputPassword",
    "value": "unger",
  },
]
`;

exports[`@gherkin: utils/GherkinAdapter.getDataTableRows() S01: should return the data table rows for the first column, without the header 1`] = `
Array [
  "InputText",
  "InputEmail",
  "InputPassword",
]
`;

exports[`@gherkin: utils/GherkinAdapter.getDataTableRows() S02: should return the data table rows for the second column, without the header 1`] = `
Array [
  "Sam Porter",
  "samporter@bridges.com",
  "unger",
]
`;

exports[`@gherkin: utils/GherkinAdapter.getDataTableRows() S03: should return all the data table rows, without the header 1`] = `
Array [
  Array [
    "InputText",
    "Sam Porter",
  ],
  Array [
    "InputEmail",
    "samporter@bridges.com",
  ],
  Array [
    "InputPassword",
    "unger",
  ],
]
`;
