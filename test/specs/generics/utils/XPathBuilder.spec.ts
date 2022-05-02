import { XPathBuilder } from "@generics/utils/XPathBuilder";
import { WebElement } from "@generics/WebElement";
const data = { any: "any", foo: "foo", quotes: "ba'r,ba'r", quote: "'" };

describe("@generics: utils/XPathBuilder constructor", () => {
  it("S01: should set the conditionals upon instantiation", () => {
    const builder = new XPathBuilder();

    const actual = (builder as any).conditionals;
    const expected = [];
    expect(actual).toEqual(expected);
  });

  it("S02: should set the selector upon instantiation", () => {
    const builder = new XPathBuilder();

    const actual = (builder as any).selector;
    const expected = "//*";
    expect(actual).toEqual(expected);
  });

  it("S02: should set the selector upon instantiation with a root selector", () => {
    const builder = new XPathBuilder(data.any);

    const actual = (builder as any).selector;
    const expected = data.any;
    expect(actual).toEqual(expected);
  });
});

describe("@generics: utils/XPathBuilder.or()", () => {
  it("S01: should add conditional: or", () => {
    const builder = new XPathBuilder().or();

    const actual = builder.build();
    const expected = "//*|";
    expect(actual).toEqual(expected);
  });
});

describe("@generics: utils/XPathBuilder.position()", () => {
  it("S01: should add conditional: position", () => {
    const builder = new XPathBuilder().position(1);

    const actual = builder.build();
    const expected = "//*[position()=1]";
    expect(actual).toEqual(expected);
  });
});

describe("@generics: utils/XPathBuilder.previous()", () => {
  it("S01: should add conditional: previous", () => {
    const builder = new XPathBuilder().previous();

    const actual = builder.build();
    const expected = "//*/..";
    expect(actual).toEqual(expected);
  });

  it("S01: should add conditional: previous with levels param", () => {
    const builder = new XPathBuilder().previous(2);

    const actual = builder.build();
    const expected = "//*/../..";
    expect(actual).toEqual(expected);
  });
});

describe("@generics: utils/XPathBuilder.next()", () => {
  it("S01: should add conditional: next", () => {
    const builder = new XPathBuilder().next();

    const actual = builder.build();
    const expected = "//*/*";
    expect(actual).toEqual(expected);
  });

  it("S02: should add conditional: next with levels param", () => {
    const builder = new XPathBuilder().next(2);

    const actual = builder.build();
    const expected = "//*/*/*";
    expect(actual).toEqual(expected);
  });

  it("S02: should add conditional: next with tag param", () => {
    const builder = new XPathBuilder().next(undefined, data.any);

    const actual = builder.build();
    const expected = `//*/${data.any}`;
    expect(actual).toEqual(expected);
  });

  it("S02: should add conditional: next with levels and tag param", () => {
    const builder = new XPathBuilder().next(2, data.any);

    const actual = builder.build();
    const expected = `//*/*/${data.any}`;
    expect(actual).toEqual(expected);
  });
});

describe("@generics: utils/XPathBuilder.hasExactAttribute()", () => {
  it("S01: should add conditional: hasExactAttribute", () => {
    const builder = new XPathBuilder().hasExactAttribute(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasExactAttribute with not param", () => {
    const builder = new XPathBuilder().hasExactAttribute(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.hasPartialAttribute()", () => {
  it("S01: should add conditional: hasPartialAttribute", () => {
    const builder = new XPathBuilder().hasPartialAttribute(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasPartialAttribute with not param", () => {
    const builder = new XPathBuilder().hasPartialAttribute(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.attributeContains()", () => {
  it("S01: should add conditional: attributeContains", () => {
    const builder = new XPathBuilder().attributeContains(data.any, data.foo);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: attributeContains with not param", () => {
    const builder = new XPathBuilder().attributeContains(data.any, data.foo, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.attributeEquals()", () => {
  it("S01: should add conditional: attributeEquals", () => {
    const builder = new XPathBuilder().attributeEquals(data.any, data.foo);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: attributeEquals with not param", () => {
    const builder = new XPathBuilder().attributeEquals(data.any, data.foo, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.nameContains()", () => {
  it("S01: should add conditional: nameContains", () => {
    const builder = new XPathBuilder().nameContains(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: nameContains with not param", () => {
    const builder = new XPathBuilder().nameContains(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.nameEquals()", () => {
  it("S01: should add conditional: nameEquals", () => {
    const builder = new XPathBuilder().nameEquals(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: nameEquals with not param", () => {
    const builder = new XPathBuilder().nameEquals(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.idContains()", () => {
  it("S01: should add conditional: idContains", () => {
    const builder = new XPathBuilder().idContains(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: idContains with not param", () => {
    const builder = new XPathBuilder().idContains(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.idEquals()", () => {
  it("S01: should add conditional: idEquals", () => {
    const builder = new XPathBuilder().idEquals(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: idEquals with not param", () => {
    const builder = new XPathBuilder().idEquals(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.classContains()", () => {
  it("S01: should add conditional: classContains", () => {
    const builder = new XPathBuilder().classContains(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: classContains with not param", () => {
    const builder = new XPathBuilder().classContains(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.classOrTagContains()", () => {
  it("S01: should add conditional: classOrTagContains", () => {
    const builder = new XPathBuilder().classOrTagContains(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: classOrTagContains with not param", () => {
    const builder = new XPathBuilder().classOrTagContains(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.classEquals()", () => {
  it("S01: should add conditional: classEquals", () => {
    const builder = new XPathBuilder().classEquals(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: classEquals with not param", () => {
    const builder = new XPathBuilder().classEquals(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.textContains()", () => {
  it("S01: should add conditional: textContains", () => {
    const builder = new XPathBuilder().textContains(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: textContains with not param", () => {
    const builder = new XPathBuilder().textContains(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: textContains quotes", () => {
    const builder = new XPathBuilder().textContains(data.quotes);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should add conditional: textContains quotes with not param", () => {
    const builder = new XPathBuilder().textContains(data.quotes, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should add conditional: textContains quote", () => {
    const builder = new XPathBuilder().textContains(data.quote);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S05: should add conditional: textContains quote with not param", () => {
    const builder = new XPathBuilder().textContains(data.quote, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.textEquals()", () => {
  it("S01: should add conditional: textEquals", () => {
    const builder = new XPathBuilder().textEquals(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: textEquals with not param", () => {
    const builder = new XPathBuilder().textEquals(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: textEquals quotes", () => {
    const builder = new XPathBuilder().textEquals(data.quotes);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should add conditional: textEquals quotes with not param", () => {
    const builder = new XPathBuilder().textEquals(data.quotes, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should add conditional: textEquals quote", () => {
    const builder = new XPathBuilder().textEquals(data.quote);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S05: should add conditional: textEquals quote with not param", () => {
    const builder = new XPathBuilder().textEquals(data.quote, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.innerHtmlContains()", () => {
  it("S01: should add conditional: innerHtmlContains", () => {
    const builder = new XPathBuilder().innerHtmlContains(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: innerHtmlContains with not param", () => {
    const builder = new XPathBuilder().innerHtmlContains(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: innerHtmlContains quotes", () => {
    const builder = new XPathBuilder().innerHtmlContains(data.quotes);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should add conditional: innerHtmlContains quotes with not param", () => {
    const builder = new XPathBuilder().innerHtmlContains(data.quotes, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should add conditional: innerHtmlContains quote", () => {
    const builder = new XPathBuilder().innerHtmlContains(data.quote);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S05: should add conditional: innerHtmlContains quote with not param", () => {
    const builder = new XPathBuilder().innerHtmlContains(data.quote, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.ancestor()", () => {
  it("S01: should add conditional: ancestor", () => {
    const builder = new XPathBuilder().ancestor();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: ancestor with tag param", () => {
    const builder = new XPathBuilder().ancestor(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.hasAncestor()", () => {
  it("S01: should add conditional: hasAncestor", () => {
    const builder = new XPathBuilder().hasAncestor();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasAncestor with tag param", () => {
    const builder = new XPathBuilder().hasAncestor(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasAncestor with not param", () => {
    const builder = new XPathBuilder().hasAncestor(undefined, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should add conditional: hasAncestor with tag and not param", () => {
    const builder = new XPathBuilder().hasAncestor(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.ancestorOrSelf()", () => {
  it("S01: should add conditional: ancestorOrSelf", () => {
    const builder = new XPathBuilder().ancestorOrSelf();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: ancestorOrSelf with tag param", () => {
    const builder = new XPathBuilder().ancestorOrSelf(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.hasAncestorOrSelf()", () => {
  it("S01: should add conditional: hasAncestorOrSelf", () => {
    const builder = new XPathBuilder().hasAncestorOrSelf();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasAncestorOrSelf with tag param", () => {
    const builder = new XPathBuilder().hasAncestorOrSelf(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasAncestorOrSelf with not param", () => {
    const builder = new XPathBuilder().hasAncestorOrSelf(undefined, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should add conditional: hasAncestorOrSelf with tag and not param", () => {
    const builder = new XPathBuilder().hasAncestorOrSelf(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.child()", () => {
  it("S01: should add conditional: child", () => {
    const builder = new XPathBuilder().child();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: child with tag param", () => {
    const builder = new XPathBuilder().child(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.hasChild()", () => {
  it("S01: should add conditional: hasChild", () => {
    const builder = new XPathBuilder().hasChild();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasChild with tag param", () => {
    const builder = new XPathBuilder().hasChild(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasChild with not param", () => {
    const builder = new XPathBuilder().hasChild(undefined, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should add conditional: hasChild with tag and not param", () => {
    const builder = new XPathBuilder().hasChild(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.descendant()", () => {
  it("S01: should add conditional: descendant", () => {
    const builder = new XPathBuilder().descendant();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: descendant with tag param", () => {
    const builder = new XPathBuilder().descendant(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.hasDescendant()", () => {
  it("S01: should add conditional: hasDescendant", () => {
    const builder = new XPathBuilder().hasDescendant();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasDescendant with tag param", () => {
    const builder = new XPathBuilder().hasDescendant(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasDescendant with not param", () => {
    const builder = new XPathBuilder().hasDescendant(undefined, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should add conditional: hasDescendant with tag and not param", () => {
    const builder = new XPathBuilder().hasDescendant(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.descendantOrSelf()", () => {
  it("S01: should add conditional: descendantOrSelf", () => {
    const builder = new XPathBuilder().descendantOrSelf();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: descendantOrSelf with tag param", () => {
    const builder = new XPathBuilder().descendantOrSelf(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.hasDescendantOrSelf()", () => {
  it("S01: should add conditional: hasDescendantOrSelf", () => {
    const builder = new XPathBuilder().hasDescendantOrSelf();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasDescendantOrSelf with tag param", () => {
    const builder = new XPathBuilder().hasDescendantOrSelf(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasDescendantOrSelf with not param", () => {
    const builder = new XPathBuilder().hasDescendantOrSelf(undefined, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should add conditional: hasDescendantOrSelf with tag and not param", () => {
    const builder = new XPathBuilder().hasDescendantOrSelf(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.following()", () => {
  it("S01: should add conditional: following", () => {
    const builder = new XPathBuilder().following();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: following with tag param", () => {
    const builder = new XPathBuilder().following(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.hasFollowing()", () => {
  it("S01: should add conditional: hasFollowing", () => {
    const builder = new XPathBuilder().hasFollowing();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasFollowing with tag param", () => {
    const builder = new XPathBuilder().hasFollowing(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasFollowing with not param", () => {
    const builder = new XPathBuilder().hasFollowing(undefined, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should add conditional: hasFollowing with tag and not param", () => {
    const builder = new XPathBuilder().hasFollowing(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.followingSibling()", () => {
  it("S01: should add conditional: followingSibling", () => {
    const builder = new XPathBuilder().followingSibling();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: followingSibling with tag param", () => {
    const builder = new XPathBuilder().followingSibling(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.hasFollowingSibling()", () => {
  it("S01: should add conditional: hasFollowingSibling", () => {
    const builder = new XPathBuilder().hasFollowingSibling();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasFollowingSibling with tag param", () => {
    const builder = new XPathBuilder().hasFollowingSibling(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasFollowingSibling with not param", () => {
    const builder = new XPathBuilder().hasFollowingSibling(undefined, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should add conditional: hasFollowingSibling with tag and not param", () => {
    const builder = new XPathBuilder().hasFollowingSibling(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.namespace()", () => {
  it("S01: should add conditional: namespace", () => {
    const builder = new XPathBuilder().namespace();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: namespace with tag param", () => {
    const builder = new XPathBuilder().namespace(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.hasNamespace()", () => {
  it("S01: should add conditional: hasNamespace", () => {
    const builder = new XPathBuilder().hasNamespace();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasNamespace with tag param", () => {
    const builder = new XPathBuilder().hasNamespace(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasNamespace with not param", () => {
    const builder = new XPathBuilder().hasNamespace(undefined, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should add conditional: hasNamespace with tag and not param", () => {
    const builder = new XPathBuilder().hasNamespace(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.parent()", () => {
  it("S01: should add conditional: parent", () => {
    const builder = new XPathBuilder().parent();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: parent with tag param", () => {
    const builder = new XPathBuilder().parent(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.hasParent()", () => {
  it("S01: should add conditional: hasParent", () => {
    const builder = new XPathBuilder().hasParent();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasParent with tag param", () => {
    const builder = new XPathBuilder().hasParent(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasParent with not param", () => {
    const builder = new XPathBuilder().hasParent(undefined, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should add conditional: hasParent with tag and not param", () => {
    const builder = new XPathBuilder().hasParent(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.preceding()", () => {
  it("S01: should add conditional: preceding", () => {
    const builder = new XPathBuilder().preceding();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: preceding with tag param", () => {
    const builder = new XPathBuilder().preceding(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.hasPreceding()", () => {
  it("S01: should add conditional: hasPreceding", () => {
    const builder = new XPathBuilder().hasPreceding();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasPreceding with tag param", () => {
    const builder = new XPathBuilder().hasPreceding(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasPreceding with not param", () => {
    const builder = new XPathBuilder().hasPreceding(undefined, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should add conditional: hasPreceding with tag and not param", () => {
    const builder = new XPathBuilder().hasPreceding(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.precedingSibling()", () => {
  it("S01: should add conditional: precedingSibling", () => {
    const builder = new XPathBuilder().precedingSibling();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: precedingSibling with tag param", () => {
    const builder = new XPathBuilder().precedingSibling(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.hasPrecedingSibling()", () => {
  it("S01: should add conditional: hasPrecedingSibling", () => {
    const builder = new XPathBuilder().hasPrecedingSibling();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasPrecedingSibling with tag param", () => {
    const builder = new XPathBuilder().hasPrecedingSibling(data.any);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should add conditional: hasPrecedingSibling with not param", () => {
    const builder = new XPathBuilder().hasPrecedingSibling(undefined, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should add conditional: hasPrecedingSibling with tag and not param", () => {
    const builder = new XPathBuilder().hasPrecedingSibling(data.any, true);

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.build()", () => {
  it("S01: should build the xpath", () => {
    const builder = new XPathBuilder();

    const actual = builder.build();
    expect(actual).toMatchSnapshot();
  });

  it("S01: should build the xpath with index", () => {
    const builder = new XPathBuilder();

    const actual = builder.build(1);
    expect(actual).toMatchSnapshot();
  });
});

describe("@generics: utils/XPathBuilder.toWebElement()", () => {
  it("S01: should create a WebElement instance", () => {
    const builder = new XPathBuilder();

    const actual = builder.toWebElement();
    const expected = new WebElement("//*");
    expect(actual).toEqual(expected);
  });

  it("S01: should create a WebElement instance with index", () => {
    const builder = new XPathBuilder();

    const actual = builder.toWebElement(1);
    const expected = new WebElement("(//*)[1]");
    expect(actual).toEqual(expected);
  });
});
