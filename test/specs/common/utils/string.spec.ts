import * as string from "@common/utils/string";

describe("@common: utils/string.isURL()", () => {
  it.each`
    str                         | expected
    ${"http://localhost:8080"}  | ${true}
    ${"https://localhost:8080"} | ${true}
    ${"ftp://myname@host.dom"}  | ${false}
    ${"/"}                      | ${false}
    ${__dirname}                | ${false}
  `("S01: return $expected for '$string'", ({ str, expected }) => {
    const actual = string.isURL(str);
    expect(actual).toEqual(expected);
  });
});

describe("@common: utils/string.isJSON()", () => {
  it.each`
    str               | expected
    ${"foobar"}       | ${false}
    ${"[\"foobar\"]"} | ${true}
    ${"{}"}           | ${true}
    ${"{\"foo\":1}"}  | ${true}
    ${123}            | ${false}
    ${{ foo: "bar" }} | ${false}
  `("S01: return $expected for '$string'", ({ str, expected }) => {
    const actual = string.isJSON(str);
    expect(actual).toEqual(expected);
  });
});
