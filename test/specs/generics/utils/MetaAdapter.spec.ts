import path from "path";
import demo from "@test/fixtures/pages/demo.meta";
import nav from "@test/fixtures/components/navigation-bar.meta";

import { MetaAdapter } from "@generics/utils/MetaAdapter";
let config: typeof browser.config;

describe("@generics: utils/MetaAdapter.getProperties()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should return the metadata properties", () => {
    const actual = MetaAdapter.getProperties(demo);
    const expected = demo.default;
    expect(actual).toEqual(expected);
  });

  it("S02: should return the metadata properties, given a specific locale", () => {
    const meta = { default: demo.default, foo: { bar: "baz" } };
    const actual = MetaAdapter.getProperties(meta, "foo");
    const expected = { ...demo.default, ...meta.foo };
    expect(actual).toEqual(expected);
  });

  it("S03: should return the metadata properties, given a specific locale with property overlaps", () => {
    const meta = { default: demo.default, foo: { bar: "baz", "section-header": "//h6" } };
    const actual = MetaAdapter.getProperties(meta, "foo");
    const expected = { ...demo.default, ...meta.foo };
    expect(actual).toEqual(expected);
  });
});

describe("@generics: utils/MetaAdapter.getPropertyValue()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should return a specific metadata property value", () => {
    const actual = MetaAdapter.getPropertyValue("demo", "url");
    const expected = demo.default.url;
    expect(actual).toEqual(expected);
  });

  it("S02: should return a specific metadata property value fiven a prop tree", () => {
    const actual = MetaAdapter.getPropertyValue("demo", "selectors", "section-header");
    const expected = demo.default.selectors["section-header"];
    expect(actual).toEqual(expected);
  });

  it("S03: throw an error if metadata can't be resolved to a file", () => {
    const meta = "foo";
    let error: Error;

    try {
      MetaAdapter.getPropertyValue(meta);
    } catch (e) {
      error = e;
    } finally {
      expect(error).toBeDefined();
      expect(error.message).toMatch(new RegExp(`^\n  Unable to resolve "${meta}" from any of the available metadata files:`));
    }
  });
});

describe("@generics: utils/MetaAdapter.getUrl()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should return a specific metadata url", () => {
    const actual = MetaAdapter.getUrl("demo");
    const expected = demo.default.url;
    expect(actual).toEqual(expected);
  });

  it("S02: should return a specific metadata url from active metadata", () => {
    whenRuntimeMetadataIsSet({ activeMeta: "demo", activeMetaSelectorKey: undefined });
    const actual = MetaAdapter.getUrl("");
    const expected = demo.default.url;
    expect(actual).toEqual(expected);
  });
});

describe("@generics: utils/MetaAdapter.getTitle()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should return a specific metadata title", () => {
    const actual = MetaAdapter.getTitle("demo");
    const expected = demo.default.title;
    expect(actual).toEqual(expected);
  });

  it("S02: should return a specific metadata title from active metadata", () => {
    whenRuntimeMetadataIsSet({ activeMeta: "demo", activeMetaSelectorKey: undefined });
    const actual = MetaAdapter.getTitle("");
    const expected = demo.default.title;
    expect(actual).toEqual(expected);
  });
});

describe("@generics: utils/MetaAdapter.getLabels()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should return the metadata labels", () => {
    const actual = MetaAdapter.getLabels("demo");
    const expected = demo.default.labels;
    expect(actual).toEqual(expected);
  });


  it("S02: should return the metadata labels from active metadata", () => {
    whenRuntimeMetadataIsSet({ activeMeta: "demo", activeMetaSelectorKey: undefined });
    const actual = MetaAdapter.getLabels("");
    const expected = demo.default.labels;
    expect(actual).toEqual(expected);
  });
});

describe("@generics: utils/MetaAdapter.getLabel()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should return a specific metadata label", () => {
    const actual = MetaAdapter.getLabel("demo", "foo");
    const expected = demo.default.labels.foo;
    expect(actual).toEqual(expected);
  });

  it("S02: should return the label as-is if given label can't be resolved to a file", () => {
    const label = "baz";
    const actual = MetaAdapter.getLabel("demo", label);
    const expected = label;
    expect(actual).toEqual(expected);
  });

  it("S03: should return the label as-is if metadata can't be resolved to a file", () => {
    const label = "baz";
    const actual = MetaAdapter.getLabel("foo", label);
    const expected = label;
    expect(actual).toEqual(expected);
  });
});

describe("@generics: utils/MetaAdapter.getSelector()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it.each([
    // When I click the "#create" button
    { id: "A", meta: "", key: "#create", activeMeta: undefined, activeMetaSelectorKey: undefined },
    // When I click the "demo" page's "#create" button
    { id: "B", meta: "demo", key: "#create", activeMeta: undefined, activeMetaSelectorKey: undefined },
    // Given I am on the "demo" site
    // When I click the "#create" button
    { id: "C", meta: "", key: "#create", activeMeta: "demo", activeMetaSelectorKey: undefined },
    // Given I am on the "demo" site
    // When I click the "iframe" page's "#create" button
    { id: "D", meta: "iframe", key: "#create", activeMeta: "demo", activeMetaSelectorKey: undefined },
    // Given I am on the "demo" site
    // When I start using the page's "section-header" element
    //  And I click the "#create" button
    { id: "E", meta: "", key: "#create", activeMeta: "demo", activeMetaSelectorKey: "section-header" },
    // When I start using the page's "section-header" element
    //  And I click the "#create" button
    { id: "F", meta: "", key: "#create", activeMeta: undefined, activeMetaSelectorKey: "section-header" },
    // When I click the "nonexisting" page's "nonexisting" button
    { id: "G", meta: "nonexisting", key: "nonexisting", activeMeta: undefined, activeMetaSelectorKey: undefined },
    // When I click the "nonexisting" page's "nonexisting" button
    { id: "H", meta: "nonexisting", key: "", activeMeta: undefined, activeMetaSelectorKey: "nonexisting" },
  ])("S01$id: should return the selector as-is - $key", ({ meta, key, activeMeta, activeMetaSelectorKey }) => {
    whenRuntimeMetadataIsSet({ activeMeta, activeMetaSelectorKey });

    const actual = MetaAdapter.getSelector(meta, key);
    const expected = key;
    expect(actual).toEqual(expected);
  });

  it.each([
    // When I click the "demo" page's "section-header" element
    { id: "A", meta: "demo", key: "section-header", activeMeta: undefined, activeMetaSelectorKey: undefined, expected: demo.default.selectors["section-header"] },
    // Given I am on the "demo" site
    // When I click the "section-header" element
    { id: "B", meta: "", key: "section-header", activeMeta: "demo", activeMetaSelectorKey: undefined, expected: demo.default.selectors["section-header"] },
    // Given I am on the "iframe" site
    // When I click the "demo" page's "section-header" element
    { id: "C", meta: "demo", key: "section-header", activeMeta: "iframe", activeMetaSelectorKey: undefined, expected: demo.default.selectors["section-header"] },
    // Given I am on the "iframe" site
    // When I start using the page's "tabs" element
    //  And I click the "demo" page's "section-header" element
    { id: "D", meta: "demo", key: "section-header", activeMeta: "iframe", activeMetaSelectorKey: "tabs", expected: demo.default.selectors["section-header"] },
    // When I start using the page's "tabs" element
    //  And I click the "demo" page's "section-header" element
    { id: "E", meta: "demo", key: "section-header", activeMeta: undefined, activeMetaSelectorKey: "tabs", expected: demo.default.selectors["section-header"] },
    // Given I start using the "navigation-bar" component
    // When I click the "nav-items" element
    { id: "F", meta: "", key: "nav-items", activeMeta: "navigation-bar", activeMetaSelectorKey: "nav", expected: nav.default.selectors["nav-items"] },
  ])("S02$id: should return the selector as a resolved meta key - $expected", ({ meta, key, activeMeta, activeMetaSelectorKey, expected }) => {
    whenRuntimeMetadataIsSet({ activeMeta, activeMetaSelectorKey });

    const actual = MetaAdapter.getSelector(meta, key);
    expect(actual).toEqual(expected);
  });

  it.each([
    // When I click the "navigation-bar" page's "nav>->nav-items" element
    { id: "A", meta: "navigation-bar", key: "nav>->nav-items", activeMeta: undefined, activeMetaSelectorKey: undefined },
    // Given I land on the "navigation-bar" page
    // When I click the "nav>->nav-items" element
    { id: "B", meta: "", key: "nav>->nav-items", activeMeta: "navigation-bar", activeMetaSelectorKey: undefined },
    // Given I land on the "navigation-bar" page
    // When I start using the page's "nav" element
    //  And I click the "nav>->nav-items" element
    { id: "C", meta: "", key: "nav>->nav-items", activeMeta: "navigation-bar", activeMetaSelectorKey: "nav" },
  ])(`S03$id: should return the selector as a resolved meta key, stitched by a delimiter - ${nav.default.selectors["nav"]}${nav.default.selectors["nav-items"]}`, ({ meta, key, activeMeta, activeMetaSelectorKey }) => {
    whenRuntimeMetadataIsSet({ activeMeta, activeMetaSelectorKey });

    const actual = MetaAdapter.getSelector(meta, key);
    const expected = `${nav.default.selectors["nav"]}${nav.default.selectors["nav-items"]}`;
    expect(actual).toEqual(expected);
  });
});

function givenBrowserConfigIsDefined() {
  config = browser.config;
  config.runtime = {};
  config.locale = "default";
  config.metadata = [
    path.resolve(__dirname, "../../../fixtures/components/nonexisting.meta"),
    path.resolve(__dirname, "../../../fixtures/components/navigation-bar.meta"),
    path.resolve(__dirname, "../../../fixtures/pages/demo.meta.ts"),
    path.resolve(__dirname, "../../../fixtures/pages/iframe/iframe.meta.ts")
  ];
}

function givenBrowserConfigIsUndefined() {
  config = undefined;
}

function whenRuntimeMetadataIsSet({ activeMeta, activeMetaSelectorKey }) {
  config.runtime.activeMeta = activeMeta;
  config.runtime.activeMetaSelectorKey = activeMetaSelectorKey;
}