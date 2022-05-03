import{ OtherConditions } from "@conditions/others";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any" };

describe("@conditions: others/OtherConditions.arrayContains()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should add the ArrayContains condition", async() => {
    const conditions = new OtherConditions().arrayContains([], []);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: others/OtherConditions.arrayEquals()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should add the ArrayEquals condition", async() => {
    const conditions = new OtherConditions().arrayEquals([], []);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: others/OtherConditions.jsonSnapshotMatch()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should add the JSONSnapshotMatch condition", async() => {
    const conditions = new OtherConditions().jsonSnapshotMatch(data.any, data);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: others/OtherConditions.objectEquals()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should add the ObjectEquals condition", async() => {
    const conditions = new OtherConditions().objectEquals(data, data);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: others/OtherConditions.objectPropEquals()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should add the ObjectPropEquals condition", async() => {
    const conditions = new OtherConditions().objectPropEquals(data, data.any, data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

