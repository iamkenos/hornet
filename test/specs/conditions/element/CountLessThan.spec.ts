import { CountLessThan } from "@conditions/element/CountLessThan";

import { givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";
const data = { any: "any", selector: "#selector", foo: 1 };

describe("@conditions: element/CountLessThan constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new CountLessThan(data.foo);

    const actual = [
      (condition as any).name,
      (condition as any).not,
      (condition as any).timeout,
      (condition as any).expected,
      (condition as any).actual,
      (condition as any).passed,
      (condition as any).result,
      (condition as any).on,
      (condition as any).element,
    ];
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: element/CountLessThan.getResult()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a passed result", async() => {
    const $$Mock = givenElementCountMock(0);
    const condition = new CountLessThan(data.foo);
    const element: any = data;
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
    expect($$Mock).toHaveBeenCalledWith(element.selector);
  });

  it("S02: should return a passed result if not is true", async() => {
    givenElementCountMock();
    const condition = new CountLessThan(data.foo, false);
    const element: any = data;
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    givenElementCountMock();
    const condition = new CountLessThan(data.foo);
    const element: any = data;
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    givenElementCountThrowsError();
    const condition = new CountLessThan(data.foo);
    const element: any = data;
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });
});

function givenElementCountMock(count = 2) {
  const mock = givenMock($$);
  mock.mockReturnValue(Array(count).fill(data));
  return mock;
}

function givenElementCountThrowsError() {
  const mock = givenMock($$);
  mock.mockImplementation(() => { throw new Error("message");});
  return mock;
}
