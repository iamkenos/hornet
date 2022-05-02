import nav, { TAG } from "@test/fixtures/components/navigation-bar.meta";
import { NavigationBar } from "@test/fixtures/components/navigation-bar.component";
import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = new NavigationBar(nav.default.selectors["nav-items"], "default");
const noparent = new NavigationBar();

describe("@generics: WebComponent constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set the tag from metadata upon instantiation", () => {
    const actual = (data as any).tag;
    const expected = TAG;
    expect(actual).toEqual(expected);
  });

  it("S02: should set the parent from metadata upon instantiation", () => {
    const actual = (data as any).parent;
    const expected = nav.default.selectors["nav-items"];
    expect(actual).toEqual(expected);

    const actual2 = (noparent as any).parent;
    const expected2 = "";
    expect(actual2).toEqual(expected2);
  });

  it("S03: should set the properties from metadata upon instantiation", () => {
    const actual = (data as any).properties;
    const expected = nav.default;
    expect(actual).toEqual(expected);
  });

  it("S04: should set the selectors from metadata upon instantiation", () => {
    const actual = (data as any).selectors;
    const expected = nav.default.selectors;
    expect(actual).toEqual(expected);
  });

  it("S05: should set the labels from metadata upon instantiation", () => {
    const actual = (data as any).labels;
    const expected = nav.default.labels;
    expect(actual).toEqual(expected);
  });

  it("S05: should set the root from metadata upon instantiation", () => {
    const actual = (data as any).root;
    const expected = (data as any).selectors[TAG];
    expect(actual).toEqual(expected);
  });

  it("S05: should set the selector from metadata upon instantiation", () => {
    const actual = (data as any).selector;
    const expected = nav.default.selectors["nav-items"] + nav.default.selectors[TAG];
    expect(actual).toEqual(expected);
  });
});
