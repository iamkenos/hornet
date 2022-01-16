import { When, Then } from "@cucumber/cucumber";

import { RETRY } from "@core/gherkin";
import * as fn from "./browser.glue";

When(
 /^I open the (?:"([^"]*)?" page's url|url "([^"]*)?")$/, RETRY(),
  fn.whenOpen
);

When(
  /^I open the (?:"([^"]*)?" page's url|url "([^"]*)?") on a new window$/, RETRY(),
  fn.whenOpenNewWindow
);

// When(
//   /^I start (?:to intercept|observing the) (?:ajax|xhr|network|api) (?:requests|calls)$/, RETRY(),
//   windowAjaxIntercept
// );

// When(
//   /^I close all except the parent (?:window|tab)$/, RETRY(),
//   windowChildrenClose
// );

// When(
//   /^I delete the "([^"]*)?" site cookie$/, RETRY(),
//   windowCookieDelete
// );

// When(
//   /^I delete the site cookies$/, RETRY(),
//   windowCookiesDelete
// );

// When(
//   /^I set the "([^"]*)?" site cookie value to "([^"]*)?"$/, RETRY(),
//   windowCookieSet
// );

// When(
//   /^I press the "([^"]*)?" key(?: (\d+) times)?$/, RETRY(),
//   windowKeyPress
// );

// When(
//   /^I close the last opened (?:window|tab)$/, RETRY(),
//   windowLastClose
// );

// When(
//   /^I focus on the last opened (?:window|tab)$/, RETRY(),
//   windowLastFocus
// );

// When(
//   /^I (accept|dismiss) the (?:alert|confirm box|prompt)$/, RETRY(),
//   windowModalHandle
// );

// When(
//   /^I type "([^"]*)?" on the prompt$/, RETRY(),
//   windowModalTextSet
// );

// When(
//   /^I navigate (back|forward) from the current page(?: (\d+) times)?$/, RETRY(),
//   windowPageNavigate
// );

// When(
//   /^I pause for (\d+)ms$/, RETRY(),
//   windowPause
// );

// When(
//   /^I focus on the parent (?:window|tab)$/, RETRY(),
//   windowParentFocus
// );

// When(
//   /^I refresh the page$/, RETRY(),
//   windowRefresh
// );

When(
  /^I scroll to the (top|bottom) of the page$/, RETRY(),
  fn.whenScrollTo
);

When(
  /^I scroll to the coordinates (\d+).(\d+) of the page$/, RETRY(),
  fn.whenScrollToCoordinates
);

When(
  /^I have a screen that is maximized$/, RETRY(),
  fn.whenSizeMaximize
);

When(
  /^I have a screen that is ([\d]+) by ([\d]+) pixels$/, RETRY(),
  fn.whenSize
);

// When(
//   /^I focus on the(?: "([^"]*)?" page's)? (?:"([^"]*)?" iframe|parent context)$/, RETRY(),
//   windowSwitchFrame
// );

// Then(
//   /^I expect the (?:ajax|xhr|network|api) (?:requests|calls) to( not)? match the (?:reference|snapshot) "([^"]*)?"$/, RETRY(),
//   windowAjaxRequestsMatch
// );

// Then(
//   /^I expect the (?:ajax|xhr|network|api) (?:requests|calls) to( not)? match the (?:reference|snapshot) "([^"]*)?" with expressions:$/, RETRY(),
//   windowAjaxRequestsMatchExp
// );

// Then(
//   /^I expect the (?:ajax|xhr|network|api) (?:requests|calls) to the following paths to( not)? match the (?:reference|snapshot) "([^"]*)?":$/, RETRY(),
//   windowAjaxRequestsMatchPaths
// );

// Then(
//   /^I expect the "([^"]*)?" site cookie value to( not)? be containing "([^"]*)?"$/, RETRY(),
//   windowCookieContains
// );

// Then(
//   /^I expect the "([^"]*)?" site cookie value to( not)? be "([^"]*)?"$/, RETRY(),
//   windowCookieEquals
// );

// Then(
//   /^I expect the "([^"]*)?" site cookie to( not)? be existing$/, RETRY(),
//   windowCookieExists
// );

// Then(
//   /^I expect the (?:window|tab) count to( not)? be "([^"]*)?"$/, RETRY(),
//   windowCountEquals
// );

// Then(
//   /^I expect the (?:window|tab) count to( not)? be (greater|less) than "([^"]*)?"$/, RETRY(),
//   windowCountGreaterLess
// );

// Then(
//   /^I expect the captured google analytics(?: event "([^"]*)?" )? to( not)? match the (?:reference|snapshot) "([^"]*)?"$/, RETRY(),
//   windowGAEntriesMatch
// );

// Then(
//   /^I expect the response to the following request to( not)? match the (?:reference|snapshot) "([^"]*)?":$/, RETRY(),
//   windowHttpResponseMatch
// );

// Then(
//   /^I expect the (viewport|page) image to( not)? match the (?:reference|snapshot) "([^"]*)?"$/, RETRY(),
//   windowImageMatch
// );

// Then(
//   /^I expect (?:a|an) (?:alert|confirm box|prompt) to( not)? be opened$/, RETRY(),
//   windowModalExists
// );

// Then(
//   /^I expect the (?:alert|confirm box|prompt) text to( not)? be containing "([^"]*)?"$/, RETRY(),
//   windowModalTextContains
// );

// Then(
//   /^I expect the (?:alert|confirm box|prompt) text to( not)? be "([^"]*)?"$/, RETRY(),
//   windowModalTextEquals
// );

Then(
  /^I expect the (?:window|page) title to( not)? be containing (?:"([^"]*)?"|the "([^"]*)?" page's title)$/, RETRY(),
  fn.thenTitleContaining
);

Then(
  /^I expect the (?:window|page) title to( not)? (?:be|match) (?:"([^"]*)?"|the "([^"]*)?" page's title)$/, RETRY(),
  fn.thenTitleContaining
);

// Then(
//   /^I expect the url to( not)? be containing (?:"([^"]*)?"|the "([^"]*)?" page's url|the base url)$/, RETRY(),
//   windowUrlContains
// );

// Then(
//   /^I expect the url to( not)? (?:be|match) (?:"([^"]*)?"|the "([^"]*)?" page's url|the base url)$/, RETRY(),
//   windowUrlEquals
// );

// Then(
//   /^I expect the url path to( not)? be containing "([^"]*)?"$/, RETRY(),
//   windowUrlPathContains
// );

// Then(
//   /^I expect the url path to( not)? be "([^"]*)?"$/, RETRY(),
//   windowUrlPathEquals
// );
