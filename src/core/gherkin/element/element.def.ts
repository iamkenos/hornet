import { When, Then } from "@cucumber/cucumber";

import { RETRY } from "@core/gherkin";
import * as fn from "./element.glue";

When(
  /^I clear the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:field|element)$/, RETRY(),
  fn.whenClear
);

When(
  /^I (?:(double|script|middle|right) )?click the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (link|button|element)(?: again)?$/, RETRY(),
  fn.whenClick
);

When(
  /^I drag the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element to the "([^"]*)?" element$/, RETRY(),
  fn.whenDrag
);

When(
  /^I upload the "([^"]*)?" file to the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:field|element)$/, RETRY(),
  fn.whenFileUpload
);

When(
  /^I focus on the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:field|element)$/, RETRY(),
  fn.whenFocus
);

When(
  /^I move to the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element(?: with an offset of (\d+),(\d+))?$/, RETRY(),
  fn.whenMoveTo
);

When(
  /^I scroll to the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element$/, RETRY(),
  fn.whenScrollTo
);

When(
  /^I select the option with (index|label|[^" ]*) "([^"]*)?" from the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" dropdown$/, RETRY(),
  fn.whenSelectDropdownOption
);

When(
  /^I (type|append) "([^"]*)?" on the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:field|element)$/, RETRY(),
  fn.whenSetValue
);

When(
  /^I (type|append) a multi-line value on the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:field|element):$/, RETRY(),
  fn.whenSetValueMultiLine
);

When(
  /^I (type|append) on the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:fields|elements):$/, RETRY(),
  fn.whenSetValues
);

When(
  /^I (select|deselect) the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:element|option|check box|toggle item|radio button)$/, RETRY(),
  fn.whenToggle
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:field|element) "([^"]*)?" attribute to( not)? (?:be containing|contain) "([^"]*)?"$/, RETRY(),
  fn.thenAttributeContains
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:field|element) "([^"]*)?" attribute to( not)? be "([^"]*)?"$/, RETRY(),
  fn.thenAttributeEquals
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:field|element) "([^"]*)?" attribute to( not)? (?:be existing|exist)$/, RETRY(),
  fn.thenAttributeExists
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element location at (x|y) axis to( not)? be (\d+.?\d*)$/, RETRY(),
  fn.thenAxisLocationEquals
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element count to( not)? be (\d+)$/, RETRY(),
  fn.thenCountEquals
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element count to( not)? be (less|more) than (\d+)$/, RETRY(),
  fn.thenCountLessOrMore
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:field|element) "([^"]*)?" css property to( not)? (?:be existing|exist)$/, RETRY(),
  fn.thenCssPropertyExists
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element to( not)? be displayed$/, RETRY(),
  fn.thenDisplayed
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element to( not)? be displayed within the viewport$/, RETRY(),
  fn.thenDisplayedInViewport
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element to( not)? be enabled$/, RETRY(),
  fn.thenEnabled
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element to( not)? (?:be existing|exist)$/, RETRY(),
  fn.thenExists
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element to( not)? have focus$/, RETRY(),
  fn.thenFocused
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (element|link) to( not)? open (?:on (?:a|the)? )?(new window|same frame|parent frame|top frame|without a target)$/, RETRY(),
  fn.thenHrefOpensOn
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (element|link) to( not)? open on a named frame "([^"]*)?"$/, RETRY(),
  fn.thenHrefOpensOnNamedFrame
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (element|link) to( not)? point (?:to (?:a|an)? |to )?(?:(path|section|absolute url|mail|tel)? )?"([^"]*)?"$/, RETRY(),
  fn.thenHrefPointsTo
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (element|link) to( not)? point to the "([^"]*)?" page$/, RETRY(),
  fn.thenHrefPointsToPage
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element(?: image)? to( not)? match the (?:reference|snapshot) "([^"]*)?"$/, RETRY(),
  fn.thenSnapshotMatch
);

Then(
  /^I expect the (option) with (index|label|[^" ]*) "([^"]*)?" from the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" dropdown to( not)? be selected$/, RETRY(),
  fn.thenOptionSelected
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:element|option|check box|toggle item|radio button) to( not)? be (?:checked|selected)$/, RETRY(),
  fn.thenSelected
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element to( not)? be (\d+)px in width and (\d+)px in height$/, RETRY(),
  fn.thenSizeEquals
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element to( not)? be (\d+)px in (width|height)$/, RETRY(),
  fn.thenSizeSideEquals
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" elements text array to( not)? (?:be containing|contain):$/, RETRY(),
  fn.thenTextArrayContains
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" elements text array to( not)? be:$/, RETRY(),
  fn.thenTextArrayEquals
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element text to( not)? (?:be containing|contain) "([^"]*)?"$/, RETRY(),
  fn.thenTextContains
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element text to( not)? (?:be containing|contain):$/, RETRY(),
  fn.thenTextContains
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element text to( not)? be empty$/, RETRY(),
  fn.thenTextEmpty
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element text to( not)? be "([^"]*)?"$/, RETRY(),
  fn.thenTextEquals
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" element text to( not)? be:$/, RETRY(),
  fn.thenTextEquals
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:field|element) value to( not)? (?:be containing|contain) "([^"]*)?"$/, RETRY(),
  fn.thenValueContains
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:field|element) value to( not)? (?:be containing|contain):$/, RETRY(),
  fn.thenValueContains
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:field|element) value to( not)? be empty$/, RETRY(),
  fn.thenValueEmpty
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:field|element) value to( not)? be "([^"]*)?"$/, RETRY(),
  fn.thenValueEquals
);

Then(
  /^I expect the(?: "([^"]*)?" (?:page|component)'s)? "([^"]*)?" (?:field|element) value to( not)? be:$/, RETRY(),
  fn.thenValueEquals
);