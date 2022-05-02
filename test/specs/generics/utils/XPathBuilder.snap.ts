// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`@generics: utils/XPathBuilder.ancestor() S01: should add conditional: ancestor 1`] = `"//*/ancestor::*"`;

exports[`@generics: utils/XPathBuilder.ancestor() S02: should add conditional: ancestor with tag param 1`] = `"//*/ancestor::any"`;

exports[`@generics: utils/XPathBuilder.ancestorOrSelf() S01: should add conditional: ancestorOrSelf 1`] = `"//*/ancestor-or-self::*"`;

exports[`@generics: utils/XPathBuilder.ancestorOrSelf() S02: should add conditional: ancestorOrSelf with tag param 1`] = `"//*/ancestor-or-self::any"`;

exports[`@generics: utils/XPathBuilder.attributeContains() S01: should add conditional: attributeContains 1`] = `"//*[contains(@any,'foo')]"`;

exports[`@generics: utils/XPathBuilder.attributeContains() S02: should add conditional: attributeContains with not param 1`] = `"//*[not(contains(@any,'foo'))]"`;

exports[`@generics: utils/XPathBuilder.attributeEquals() S01: should add conditional: attributeEquals 1`] = `"//*[@any='foo']"`;

exports[`@generics: utils/XPathBuilder.attributeEquals() S02: should add conditional: attributeEquals with not param 1`] = `"//*[not(@any='foo')]"`;

exports[`@generics: utils/XPathBuilder.build() S01: should build the xpath 1`] = `"//*"`;

exports[`@generics: utils/XPathBuilder.build() S01: should build the xpath with index 1`] = `"(//*)[1]"`;

exports[`@generics: utils/XPathBuilder.child() S01: should add conditional: child 1`] = `"//*/child::*"`;

exports[`@generics: utils/XPathBuilder.child() S02: should add conditional: child with tag param 1`] = `"//*/child::any"`;

exports[`@generics: utils/XPathBuilder.classContains() S01: should add conditional: classContains 1`] = `"//*[contains(@class,'any')]"`;

exports[`@generics: utils/XPathBuilder.classContains() S02: should add conditional: classContains with not param 1`] = `"//*[not(contains(@class,'any'))]"`;

exports[`@generics: utils/XPathBuilder.classEquals() S01: should add conditional: classEquals 1`] = `"//*[@class='any']"`;

exports[`@generics: utils/XPathBuilder.classEquals() S02: should add conditional: classEquals with not param 1`] = `"//*[not(@class='any')]"`;

exports[`@generics: utils/XPathBuilder.classOrTagContains() S01: should add conditional: classOrTagContains 1`] = `"//*[contains(@class,any) or contains(name(),any)]"`;

exports[`@generics: utils/XPathBuilder.classOrTagContains() S02: should add conditional: classOrTagContains with not param 1`] = `"//*[not(contains(@class,any) or contains(name(),any))]"`;

exports[`@generics: utils/XPathBuilder.descendant() S01: should add conditional: descendant 1`] = `"//*/descendant::*"`;

exports[`@generics: utils/XPathBuilder.descendant() S02: should add conditional: descendant with tag param 1`] = `"//*/descendant::any"`;

exports[`@generics: utils/XPathBuilder.descendantOrSelf() S01: should add conditional: descendantOrSelf 1`] = `"//*/descendant-or-self::*"`;

exports[`@generics: utils/XPathBuilder.descendantOrSelf() S02: should add conditional: descendantOrSelf with tag param 1`] = `"//*/descendant-or-self::any"`;

exports[`@generics: utils/XPathBuilder.following() S01: should add conditional: following 1`] = `"//*/following::*"`;

exports[`@generics: utils/XPathBuilder.following() S02: should add conditional: following with tag param 1`] = `"//*/following::any"`;

exports[`@generics: utils/XPathBuilder.followingSibling() S01: should add conditional: followingSibling 1`] = `"//*/following-sibling::*"`;

exports[`@generics: utils/XPathBuilder.followingSibling() S02: should add conditional: followingSibling with tag param 1`] = `"//*/following-sibling::any"`;

exports[`@generics: utils/XPathBuilder.hasAncestor() S01: should add conditional: hasAncestor 1`] = `"//*[ancestor::*]"`;

exports[`@generics: utils/XPathBuilder.hasAncestor() S02: should add conditional: hasAncestor with not param 1`] = `"//*[not(ancestor::*)]"`;

exports[`@generics: utils/XPathBuilder.hasAncestor() S02: should add conditional: hasAncestor with tag param 1`] = `"//*[ancestor::any]"`;

exports[`@generics: utils/XPathBuilder.hasAncestor() S03: should add conditional: hasAncestor with tag and not param 1`] = `"//*[not(ancestor::any)]"`;

exports[`@generics: utils/XPathBuilder.hasAncestorOrSelf() S01: should add conditional: hasAncestorOrSelf 1`] = `"//*[ancestor-or-self::*]"`;

exports[`@generics: utils/XPathBuilder.hasAncestorOrSelf() S02: should add conditional: hasAncestorOrSelf with not param 1`] = `"//*[not(ancestor-or-self::*)]"`;

exports[`@generics: utils/XPathBuilder.hasAncestorOrSelf() S02: should add conditional: hasAncestorOrSelf with tag param 1`] = `"//*[ancestor-or-self::any]"`;

exports[`@generics: utils/XPathBuilder.hasAncestorOrSelf() S03: should add conditional: hasAncestorOrSelf with tag and not param 1`] = `"//*[not(ancestor-or-self::any)]"`;

exports[`@generics: utils/XPathBuilder.hasChild() S01: should add conditional: hasChild 1`] = `"//*[child::*]"`;

exports[`@generics: utils/XPathBuilder.hasChild() S02: should add conditional: hasChild with not param 1`] = `"//*[not(child::*)]"`;

exports[`@generics: utils/XPathBuilder.hasChild() S02: should add conditional: hasChild with tag param 1`] = `"//*[child::any]"`;

exports[`@generics: utils/XPathBuilder.hasChild() S03: should add conditional: hasChild with tag and not param 1`] = `"//*[not(child::any)]"`;

exports[`@generics: utils/XPathBuilder.hasDescendant() S01: should add conditional: hasDescendant 1`] = `"//*[descendant::*]"`;

exports[`@generics: utils/XPathBuilder.hasDescendant() S02: should add conditional: hasDescendant with not param 1`] = `"//*[not(descendant::*)]"`;

exports[`@generics: utils/XPathBuilder.hasDescendant() S02: should add conditional: hasDescendant with tag param 1`] = `"//*[descendant::any]"`;

exports[`@generics: utils/XPathBuilder.hasDescendant() S03: should add conditional: hasDescendant with tag and not param 1`] = `"//*[not(descendant::any)]"`;

exports[`@generics: utils/XPathBuilder.hasDescendantOrSelf() S01: should add conditional: hasDescendantOrSelf 1`] = `"//*[descendant-or-self::*]"`;

exports[`@generics: utils/XPathBuilder.hasDescendantOrSelf() S02: should add conditional: hasDescendantOrSelf with not param 1`] = `"//*[not(descendant-or-self::*)]"`;

exports[`@generics: utils/XPathBuilder.hasDescendantOrSelf() S02: should add conditional: hasDescendantOrSelf with tag param 1`] = `"//*[descendant-or-self::any]"`;

exports[`@generics: utils/XPathBuilder.hasDescendantOrSelf() S03: should add conditional: hasDescendantOrSelf with tag and not param 1`] = `"//*[not(descendant-or-self::any)]"`;

exports[`@generics: utils/XPathBuilder.hasExactAttribute() S01: should add conditional: hasExactAttribute 1`] = `"//*[attribute::*[local-name()='any']]"`;

exports[`@generics: utils/XPathBuilder.hasExactAttribute() S02: should add conditional: hasExactAttribute with not param 1`] = `"//*[not(attribute::*[local-name()='any'])]"`;

exports[`@generics: utils/XPathBuilder.hasFollowing() S01: should add conditional: hasFollowing 1`] = `"//*[following::*]"`;

exports[`@generics: utils/XPathBuilder.hasFollowing() S02: should add conditional: hasFollowing with not param 1`] = `"//*[not(following::*)]"`;

exports[`@generics: utils/XPathBuilder.hasFollowing() S02: should add conditional: hasFollowing with tag param 1`] = `"//*[following::any]"`;

exports[`@generics: utils/XPathBuilder.hasFollowing() S03: should add conditional: hasFollowing with tag and not param 1`] = `"//*[not(following::any)]"`;

exports[`@generics: utils/XPathBuilder.hasFollowingSibling() S01: should add conditional: hasFollowingSibling 1`] = `"//*[following-sibling::*]"`;

exports[`@generics: utils/XPathBuilder.hasFollowingSibling() S02: should add conditional: hasFollowingSibling with not param 1`] = `"//*[not(following-sibling::*)]"`;

exports[`@generics: utils/XPathBuilder.hasFollowingSibling() S02: should add conditional: hasFollowingSibling with tag param 1`] = `"//*[following-sibling::any]"`;

exports[`@generics: utils/XPathBuilder.hasFollowingSibling() S03: should add conditional: hasFollowingSibling with tag and not param 1`] = `"//*[not(following-sibling::any)]"`;

exports[`@generics: utils/XPathBuilder.hasNamespace() S01: should add conditional: hasNamespace 1`] = `"//*[namespace::*]"`;

exports[`@generics: utils/XPathBuilder.hasNamespace() S02: should add conditional: hasNamespace with not param 1`] = `"//*[not(namespace::*)]"`;

exports[`@generics: utils/XPathBuilder.hasNamespace() S02: should add conditional: hasNamespace with tag param 1`] = `"//*[namespace::any]"`;

exports[`@generics: utils/XPathBuilder.hasNamespace() S03: should add conditional: hasNamespace with tag and not param 1`] = `"//*[not(namespace::any)]"`;

exports[`@generics: utils/XPathBuilder.hasParent() S01: should add conditional: hasParent 1`] = `"//*[parent::*]"`;

exports[`@generics: utils/XPathBuilder.hasParent() S02: should add conditional: hasParent with not param 1`] = `"//*[not(parent::*)]"`;

exports[`@generics: utils/XPathBuilder.hasParent() S02: should add conditional: hasParent with tag param 1`] = `"//*[parent::any]"`;

exports[`@generics: utils/XPathBuilder.hasParent() S03: should add conditional: hasParent with tag and not param 1`] = `"//*[not(parent::any)]"`;

exports[`@generics: utils/XPathBuilder.hasPartialAttribute() S01: should add conditional: hasPartialAttribute 1`] = `"//*[attribute::*[contains(local-name(),'any')]]"`;

exports[`@generics: utils/XPathBuilder.hasPartialAttribute() S02: should add conditional: hasPartialAttribute with not param 1`] = `"//*[not(attribute::*[contains(local-name(),'any')])]"`;

exports[`@generics: utils/XPathBuilder.hasPreceding() S01: should add conditional: hasPreceding 1`] = `"//*[preceding::*]"`;

exports[`@generics: utils/XPathBuilder.hasPreceding() S02: should add conditional: hasPreceding with not param 1`] = `"//*[not(preceding::*)]"`;

exports[`@generics: utils/XPathBuilder.hasPreceding() S02: should add conditional: hasPreceding with tag param 1`] = `"//*[preceding::any]"`;

exports[`@generics: utils/XPathBuilder.hasPreceding() S03: should add conditional: hasPreceding with tag and not param 1`] = `"//*[not(preceding::any)]"`;

exports[`@generics: utils/XPathBuilder.hasPrecedingSibling() S01: should add conditional: hasPrecedingSibling 1`] = `"//*[preceding-sibling::*]"`;

exports[`@generics: utils/XPathBuilder.hasPrecedingSibling() S02: should add conditional: hasPrecedingSibling with not param 1`] = `"//*[not(preceding-sibling::*)]"`;

exports[`@generics: utils/XPathBuilder.hasPrecedingSibling() S02: should add conditional: hasPrecedingSibling with tag param 1`] = `"//*[preceding-sibling::any]"`;

exports[`@generics: utils/XPathBuilder.hasPrecedingSibling() S03: should add conditional: hasPrecedingSibling with tag and not param 1`] = `"//*[not(preceding-sibling::any)]"`;

exports[`@generics: utils/XPathBuilder.idContains() S01: should add conditional: idContains 1`] = `"//*[contains(@id,'any')]"`;

exports[`@generics: utils/XPathBuilder.idContains() S02: should add conditional: idContains with not param 1`] = `"//*[not(contains(@id,'any'))]"`;

exports[`@generics: utils/XPathBuilder.idEquals() S01: should add conditional: idEquals 1`] = `"//*[@id='any']"`;

exports[`@generics: utils/XPathBuilder.idEquals() S02: should add conditional: idEquals with not param 1`] = `"//*[not(@id='any')]"`;

exports[`@generics: utils/XPathBuilder.innerHtmlContains() S01: should add conditional: innerHtmlContains 1`] = `"//*[contains(.,'any')]"`;

exports[`@generics: utils/XPathBuilder.innerHtmlContains() S02: should add conditional: innerHtmlContains quotes 1`] = `"//*[contains(.,concat('ba',\\"'\\",'r,ba',\\"'\\",'r'))]"`;

exports[`@generics: utils/XPathBuilder.innerHtmlContains() S02: should add conditional: innerHtmlContains with not param 1`] = `"//*[not(contains(.,'any'))]"`;

exports[`@generics: utils/XPathBuilder.innerHtmlContains() S03: should add conditional: innerHtmlContains quotes with not param 1`] = `"//*[not(contains(.,concat('ba',\\"'\\",'r,ba',\\"'\\",'r')))]"`;

exports[`@generics: utils/XPathBuilder.innerHtmlContains() S04: should add conditional: innerHtmlContains quote 1`] = `"//*[contains(.,concat(\\"'\\"))]"`;

exports[`@generics: utils/XPathBuilder.innerHtmlContains() S05: should add conditional: innerHtmlContains quote with not param 1`] = `"//*[not(contains(.,concat(\\"'\\")))]"`;

exports[`@generics: utils/XPathBuilder.nameContains() S01: should add conditional: nameContains 1`] = `"//*[contains(@name,'any')]"`;

exports[`@generics: utils/XPathBuilder.nameContains() S02: should add conditional: nameContains with not param 1`] = `"//*[not(contains(@name,'any'))]"`;

exports[`@generics: utils/XPathBuilder.nameEquals() S01: should add conditional: nameEquals 1`] = `"//*[@name='any']"`;

exports[`@generics: utils/XPathBuilder.nameEquals() S02: should add conditional: nameEquals with not param 1`] = `"//*[not(@name='any')]"`;

exports[`@generics: utils/XPathBuilder.namespace() S01: should add conditional: namespace 1`] = `"//*/namespace::*"`;

exports[`@generics: utils/XPathBuilder.namespace() S02: should add conditional: namespace with tag param 1`] = `"//*/namespace::any"`;

exports[`@generics: utils/XPathBuilder.parent() S01: should add conditional: parent 1`] = `"//*/parent::*"`;

exports[`@generics: utils/XPathBuilder.parent() S02: should add conditional: parent with tag param 1`] = `"//*/parent::any"`;

exports[`@generics: utils/XPathBuilder.preceding() S01: should add conditional: preceding 1`] = `"//*/preceding::*"`;

exports[`@generics: utils/XPathBuilder.preceding() S02: should add conditional: preceding with tag param 1`] = `"//*/preceding::any"`;

exports[`@generics: utils/XPathBuilder.precedingSibling() S01: should add conditional: precedingSibling 1`] = `"//*/preceding-sibling::*"`;

exports[`@generics: utils/XPathBuilder.precedingSibling() S02: should add conditional: precedingSibling with tag param 1`] = `"//*/preceding-sibling::any"`;

exports[`@generics: utils/XPathBuilder.textContains() S01: should add conditional: textContains 1`] = `"//*[contains(text(),'any') or text()[contains(.,'any')]]"`;

exports[`@generics: utils/XPathBuilder.textContains() S02: should add conditional: textContains quotes 1`] = `"//*[contains(text(),concat('ba',\\"'\\",'r,ba',\\"'\\",'r')) or text()[contains(.,concat('ba',\\"'\\",'r,ba',\\"'\\",'r'))]]"`;

exports[`@generics: utils/XPathBuilder.textContains() S02: should add conditional: textContains with not param 1`] = `"//*[not(contains(text(),'any') or text()[contains(.,'any')])]"`;

exports[`@generics: utils/XPathBuilder.textContains() S03: should add conditional: textContains quotes with not param 1`] = `"//*[not(contains(text(),concat('ba',\\"'\\",'r,ba',\\"'\\",'r')) or text()[contains(.,concat('ba',\\"'\\",'r,ba',\\"'\\",'r'))])]"`;

exports[`@generics: utils/XPathBuilder.textContains() S04: should add conditional: textContains quote 1`] = `"//*[contains(text(),concat(\\"'\\")) or text()[contains(.,concat(\\"'\\"))]]"`;

exports[`@generics: utils/XPathBuilder.textContains() S05: should add conditional: textContains quote with not param 1`] = `"//*[not(contains(text(),concat(\\"'\\")) or text()[contains(.,concat(\\"'\\"))])]"`;

exports[`@generics: utils/XPathBuilder.textEquals() S01: should add conditional: textEquals 1`] = `"//*[text()='any' or normalize-space()='any']"`;

exports[`@generics: utils/XPathBuilder.textEquals() S02: should add conditional: textEquals quotes 1`] = `"//*[text()=concat('ba',\\"'\\",'r,ba',\\"'\\",'r') or normalize-space()=concat('ba',\\"'\\",'r,ba',\\"'\\",'r')]"`;

exports[`@generics: utils/XPathBuilder.textEquals() S02: should add conditional: textEquals with not param 1`] = `"//*[not(text()='any' or normalize-space()='any')]"`;

exports[`@generics: utils/XPathBuilder.textEquals() S03: should add conditional: textEquals quotes with not param 1`] = `"//*[not(text()=concat('ba',\\"'\\",'r,ba',\\"'\\",'r') or normalize-space()=concat('ba',\\"'\\",'r,ba',\\"'\\",'r'))]"`;

exports[`@generics: utils/XPathBuilder.textEquals() S04: should add conditional: textEquals quote 1`] = `"//*[text()=concat(\\"'\\") or normalize-space()=concat(\\"'\\")]"`;

exports[`@generics: utils/XPathBuilder.textEquals() S05: should add conditional: textEquals quote with not param 1`] = `"//*[not(text()=concat(\\"'\\") or normalize-space()=concat(\\"'\\"))]"`;
