import{ ElementConditions } from "@conditions/element";

import { Axis, SizeContext } from "@commands/utils/enums";
import { SnapshotMatch } from "@conditions/browser/SnapshotMatch";

import { givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";

jest.mock("@conditions/browser/SnapshotMatch", () => ({ SnapshotMatch: jest.fn() }));
const data = { any: "any", selector: "#selector", foo: "foo", bar: "bar", x: 1, y: 2 };

describe("@conditions: element/ElementConditions.attributeContains()", () => {
  it("S01: should add the AttributeContains condition", async() => {
    const conditions = new ElementConditions(data as any).attributeContains(data.any, data.foo);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.attributeEquals()", () => {
  it("S01: should add the AttributeEquals condition", async() => {
    const conditions = new ElementConditions(data as any).attributeEquals(data.any, data.foo);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.attributeExists()", () => {
  it("S01: should add the AttributeExists condition", async() => {
    const conditions = new ElementConditions(data as any).attributeExists(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.axisLocationEquals()", () => {
  it("S01: should add the AxisLocationEquals condition", async() => {
    const conditions = new ElementConditions(data as any).axisLocationEquals(Axis.X, data.x);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.clickable()", () => {
  it("S01: should add the Clickable condition", async() => {
    const conditions = new ElementConditions(data as any).clickable();

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.countEquals()", () => {
  it("S01: should add the CountEquals condition", async() => {
    const conditions = new ElementConditions(data as any).countEquals(data.x);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.countLessThan()", () => {
  it("S01: should add the CountLessThan condition", async() => {
    const conditions = new ElementConditions(data as any).countLessThan(data.x);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.countMoreThan()", () => {
  it("S01: should add the CountMoreThan condition", async() => {
    const conditions = new ElementConditions(data as any).countMoreThan(data.x);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.cssPropertyExists()", () => {
  it("S01: should add the CssPropertyExists condition", async() => {
    const conditions = new ElementConditions(data as any).cssPropertyExists(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.displayed()", () => {
  it("S01: should add the Displayed condition", async() => {
    const conditions = new ElementConditions(data as any).displayed();

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.displayedInViewport()", () => {
  it("S01: should add the DisplayedInViewport condition", async() => {
    const conditions = new ElementConditions(data as any).displayedInViewport();

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.enabled()", () => {
  it("S01: should add the Enabled condition", async() => {
    const conditions = new ElementConditions(data as any).enabled();

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.exists()", () => {
  it("S01: should add the Exists condition", async() => {
    const conditions = new ElementConditions(data as any).exists();

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.focused()", () => {
  it("S01: should add the Focused condition", async() => {
    const conditions = new ElementConditions(data as any).focused();

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.selected()", () => {
  it("S01: should add the Selected condition", async() => {
    const conditions = new ElementConditions(data as any).selected();

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.sizeEquals()", () => {
  it("S01: should add the SizeEquals condition", async() => {
    const conditions = new ElementConditions(data as any).sizeEquals(data.x, data.y);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.sizeSideEquals()", () => {
  it("S01: should add the SizeSideEquals condition", async() => {
    const conditions = new ElementConditions(data as any).sizeSideEquals(SizeContext.HEIGHT, data.x);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.snapshotMatch()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should add the SnapshotMatch condition", async() => {
    givenMock(SnapshotMatch).mockReturnValue({ setElement: () => SnapshotMatch });
    const conditions = new ElementConditions(data as any).snapshotMatch(data.any, { saveAboveTolerance: 69 });

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.textContains()", () => {
  it("S01: should add the TextContains condition", async() => {
    const conditions = new ElementConditions(data as any).textContains(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.textEquals()", () => {
  it("S01: should add the TextEquals condition", async() => {
    const conditions = new ElementConditions(data as any).textEquals(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.valueContains()", () => {
  it("S01: should add the ValueContains condition", async() => {
    const conditions = new ElementConditions(data as any).valueContains(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/ElementConditions.valueEquals()", () => {
  it("S01: should add the ValueEquals condition", async() => {
    const conditions = new ElementConditions(data as any).valueEquals(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

