// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@generics: WebElement.getByAbsoluteXPathAll() S01: should return an array of new webelement instance instance with the selectors set as the absolute xpath 1`] = `
Array [
  WebElement {
    "parent": "",
    "selector": "foo",
  },
  WebElement {
    "parent": "",
    "selector": "any",
  },
]
`;

exports[`@generics: WebElement.getByIndexedXPath() S01: should return a new element instance with the selector set as the element's indexed xpath 1`] = `
WebElement {
  "parent": "",
  "selector": "(foo)[2]",
}
`;

exports[`@generics: WebElement.getByIndexedXPath() S02: should return a new element instance of the given type with the selector set as the element's indexed xpath 1`] = `
NavigationBar {
  "labels": Object {
    "foo": "bar",
  },
  "parent": "",
  "properties": Object {
    "labels": Object {
      "foo": "bar",
    },
    "selectors": Object {
      "nav": "//nav",
      "nav-items": "//ul/li",
    },
  },
  "root": "//nav",
  "selector": "(//nav)[2]",
  "selectors": Object {
    "nav": "//nav",
    "nav-items": "//ul/li",
  },
  "tag": "nav",
}
`;

exports[`@generics: WebElement.getByIndexedXPath() S03: should return a new element instance of the given type with the selector set as the element's indexed xpath, having a parent 1`] = `
NavigationBar {
  "labels": Object {
    "foo": "bar",
  },
  "parent": "foo",
  "properties": Object {
    "labels": Object {
      "foo": "bar",
    },
    "selectors": Object {
      "nav": "//nav",
      "nav-items": "//ul/li",
    },
  },
  "root": "//nav",
  "selector": "(foo//nav)[2]",
  "selectors": Object {
    "nav": "//nav",
    "nav-items": "//ul/li",
  },
  "tag": "nav",
}
`;
