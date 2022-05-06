import{ BrowserConditions } from "@conditions/browser";

import { BrowserStorage, ImageCompareContext } from "@commands/utils/enums";
import { givenBrowserConfig } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo", bar: "bar", x: 1, y: 2 };

describe("@conditions: browser/BrowserConditions.alertExists()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the AlertExists condition", async() => {
    const conditions = new BrowserConditions().alertExists();

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.alertTextContains()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the AlertTextContains condition", async() => {
    const conditions = new BrowserConditions().alertTextContains(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.alertTextEquals()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the AlertTextEquals condition", async() => {
    const conditions = new BrowserConditions().alertTextEquals(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.cookieContains()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the CookieContains condition", async() => {
    const conditions = new BrowserConditions().cookieContains(data.any, data.foo);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.cookieEquals()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the CookieEquals condition", async() => {
    const conditions = new BrowserConditions().cookieEquals(data.any, data.foo);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.cookieExists()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the CookieExists condition", async() => {
    const conditions = new BrowserConditions().cookieExists(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.ready()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the DocumentReady condition", async() => {
    const conditions = new BrowserConditions().ready();

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.googleAnalyticsMatch()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the GoogleAnalyticsMatch condition", async() => {
    const conditions = new BrowserConditions().googleAnalyticsMatch(data.any, data.foo);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.networkRequestsMatch()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the NetworkRequestsMatch condition", async() => {
    const conditions = new BrowserConditions().networkRequestsMatch(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.snapshotMatch()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the SnapshotMatch condition", async() => {
    const conditions = new BrowserConditions().snapshotMatch(ImageCompareContext.PAGE, data.foo);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.storageItemContains()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the StorageItemContains condition", async() => {
    const conditions = new BrowserConditions().storageItemContains(BrowserStorage.LOCAL, data.foo, data.bar);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.storageItemEquals()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the StorageItemEquals condition", async() => {
    const conditions = new BrowserConditions().storageItemEquals(BrowserStorage.LOCAL, data.foo, data.bar);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.storageItemExists()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the StorageItemExists condition", async() => {
    const conditions = new BrowserConditions().storageItemExists(BrowserStorage.LOCAL, data.foo);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.titleContains()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the TitleContains condition", async() => {
    const conditions = new BrowserConditions().titleContains(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.titleEquals()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the TitleEquals condition", async() => {
    const conditions = new BrowserConditions().titleEquals(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.urlContains()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the UrlContains condition", async() => {
    const conditions = new BrowserConditions().urlContains(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.urlEquals()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the UrlEquals condition", async() => {
    const conditions = new BrowserConditions().urlEquals(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.urlPathContains()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the UrlPathContains condition", async() => {
    const conditions = new BrowserConditions().urlPathContains(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.urlPathEquals()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the UrlPathEquals condition", async() => {
    const conditions = new BrowserConditions().urlPathEquals(data.any);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.windowCountEquals()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the WindowCountEquals condition", async() => {
    const conditions = new BrowserConditions().windowCountEquals(data.x);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.windowCountLessThan()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the WindowCountLessThan condition", async() => {
    const conditions = new BrowserConditions().windowCountLessThan(data.x);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/BrowserConditions.windowCountMoreThan()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
  });

  it("S01: should add the WindowCountMoreThan condition", async() => {
    const conditions = new BrowserConditions().windowCountMoreThan(data.x);

    const actual = (conditions as any).conditions;
    expect(actual).toMatchSnapshot();
  });
});

function givenBrowserConfigIsDefined() {
  const outDir = "ouput";
  const actualDir = outDir + "/actual";
  const baselineDir = outDir + "/baseline";
  const diffDir = outDir + "/actual";

  browser.config = givenBrowserConfig();
  browser.config.snapshots.images.outDir = outDir;
  browser.config.snapshots.images.actualDir = actualDir;
  browser.config.snapshots.images.baselineDir = baselineDir;
  browser.config.snapshots.images.diffDir = diffDir;
  browser.config.snapshots.requests.outDir = outDir;
  browser.config.snapshots.requests.actualDir = actualDir;
  browser.config.snapshots.requests.baselineDir = baselineDir;
  browser.config.snapshots.requests.diffDir = diffDir;
  browser.config.snapshots.responses.outDir = outDir;
  browser.config.snapshots.responses.actualDir = actualDir;
  browser.config.snapshots.responses.baselineDir = baselineDir;
  browser.config.snapshots.responses.diffDir = diffDir;
}

function givenBrowserConfigIsUndefined() {
  browser.config = undefined;
}
