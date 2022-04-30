import { Given, Then, When } from "@cucumber/cucumber";

import { RETRY } from "@gherkin";
import * as fn from "./browser.glue";

Given(
  /^I am on the "([^"]*)?" (?:page|site|portal)$/, RETRY(),
  fn.givenOnPage
);

When(
  /^I clean the browser session$/, RETRY(),
  fn.whenClean
);

When(
  /^I close the last opened (?:window|tab)$/, RETRY(),
  fn.whenCloseLastWindow
);

When(
  /^I close all (?:except the parent|other) (?:window|tab)(?:s)?$/, RETRY(),
  fn.whenCloseOtherWindows
);

When(
  /^I delete the "([^"]*)?" site cookie$/, RETRY(),
  fn.whenCookieDeleted
);

When(
  /^I delete the site cookies$/, RETRY(),
  fn.whenCookiesDeleted
);

When(
  /^I set the "([^"]*)?" site cookie value to "([^"]*)?"$/, RETRY(),
  fn.whenCookieSet
);

When(
  /^I navigate (back|forward) from the current page(?: (\d+) times)?$/, RETRY(),
  fn.whenNavigate
);

When(
  /^I start (?:to intercept|observing the) (?:ajax|xhr|network|api) (?:requests|calls)$/, RETRY(),
  fn.whenObserveNetwork
);

When(
  /^I open the (?:"([^"]*)?" page's url|url "([^"]*)?")$/, RETRY(),
  fn.whenOpen
);

When(
  /^I open the (?:"([^"]*)?" page's url|url "([^"]*)?") on a new window$/, RETRY(),
  fn.whenOpenNewWindow
);

When(
  /^I press the "([^"]*)?" key(?: (\d+) times)?$/, RETRY(),
  fn.whenPressKey
);

When(
  /^I press the "([^"]*)?" keys$/, RETRY(),
  fn.whenPressKeys
);

When(
  /^I refresh the page$/, RETRY(),
  fn.whenRefresh
);

When(
  /^I scroll to the (top|bottom) of the page$/, RETRY(),
  fn.whenScrollTo
);

When(
  /^I scroll to the coordinates (\d+).(\d+) of the page$/, RETRY(),
  fn.whenScrollToCoordinates
);

When(
  /^I (accept|dismiss) the (?:alert|confirm box|prompt)$/, RETRY(),
  fn.whenSetAlertAction
);

When(
  /^I type "([^"]*)?" on the prompt$/, RETRY(),
  fn.whenSetAlertText
);

When(
  /^I have a screen that is maximized$/, RETRY(),
  fn.whenSetMaximize
);

When(
  /^I have a screen that is (\d+) by (\d+) pixels$/, RETRY(),
  fn.whenSetSize
);

When(
  /^I set the "([^"]*)?" (local|session) storage item value to "([^"]*)?"$/, RETRY(),
  fn.whenStorageItemSet
);

When(
  /^I clear the (local|session) storage$/, RETRY(),
  fn.whenStorageItemsCleared
);

When(
  /^I (?:focus on|switch to) the(?: "([^"]*)?" page's)? (?:"([^"]*)?" iframe|parent context)$/, RETRY(),
  fn.whenSwitchToFrameOrParent
);

When(
  /^I (?:focus on|switch to) the parent (?:window|tab)$/, RETRY(),
  fn.whenSwitchToParentWindow
);

When(
  /^I (?:focus on|switch to) the last opened (?:window|tab)$/, RETRY(),
  fn.whenSwitchToLastWindow
);

When(
  /^I (?:pause|wait|stay idle) for (\d+)ms$/, RETRY(),
  fn.whenWait
);

When(
  /^I (?:save|store) the current (?:window|screen) size$/, RETRY(),
  fn.whenWindowSizeStored
);

When(
  /^I restore the (?:window|screen) size$/, RETRY(),
  fn.whenWindowSizeRestored
);

Then(
  /^I expect (?:a|an|the) (?:alert|confirm box|prompt) to( not)? be opened$/, RETRY(),
  fn.thenAlertExists
);

Then(
  /^I expect the (?:alert|confirm box|prompt) text to( not)? contain "([^"]*)?"$/, RETRY(),
  fn.thenAlertTextContains
);

Then(
  /^I expect the (?:alert|confirm box|prompt) text to( not)? be "([^"]*)?"$/, RETRY(),
  fn.thenAlertTextEquals
);

Then(
  /^I expect the "([^"]*)?" site cookie value to( not)? contain "([^"]*)?"$/, RETRY(),
  fn.thenCookieContains
);

Then(
  /^I expect the "([^"]*)?" site cookie value to( not)? be "([^"]*)?"$/, RETRY(),
  fn.thenCookieEquals
);

Then(
  /^I expect the "([^"]*)?" site cookie to( not)? exist$/, RETRY(),
  fn.thenCookieExists
);

Then(
  /^I expect the (?:window|tab) count to( not)? be (\d+)$/, RETRY(),
  fn.thenCountEquals
);

Then(
  /^I expect the (?:window|tab) count to( not)? be (less|more) than (\d+)$/, RETRY(),
  fn.thenCountLessOrMore
);

Then(
  /^I expect the captured google analytics(?: "([^"]*)?" event)? to( not)? match the snapshot "([^"]*)?"$/, RETRY(),
  fn.thenGAEntriesSnapshotMatch
);

Then(
  /^I expect the response to the following request to( not)? match the snapshot "([^"]*)?":$/, RETRY(),
  fn.thenHttpResponseSnapshotMatch
);

Then(
  /^I expect the (?:ajax|xhr|network|api) (?:requests|calls)( with headers)? to( not)? match the snapshot "([^"]*)?"$/, RETRY(),
  fn.thenNetworkCallsSnapshotMatch
);

Then(
  /^I expect the (?:ajax|xhr|network|api) (?:requests|calls)( with headers)? to the following paths to( not)? match the snapshot "([^"]*)?":$/, RETRY(),
  fn.thenNetworkCallsOnPathsSnapshotMatch
);

Then(
  /^I expect the (?:ajax|xhr|network|api) (?:requests|calls)( with headers)? to( not)? match the snapshot "([^"]*)?" with expressions:$/, RETRY(),
  fn.thenNetworkCallsOnPathsSnapshotMatchExpressions
);

Then(
  /^I expect to(?: still)? be(?: back)? (?:redirected to|on) the "([^"]*)?" (?:page|portal|site)$/, RETRY(),
  fn.thenOnPage
);

Then(
  /^I expect the site to be ready$/, RETRY(),
  fn.thenSiteReady
);

Then(
  /^I expect the (viewport|page)(?: image)? to( not)? match the snapshot "([^"]*)?"$/, RETRY(),
  fn.thenSnapshotMatch
);

Then(
  /^I expect the "([^"]*)?" site (local|session) storage item value to( not)? contain "([^"]*)?"$/, RETRY(),
  fn.thenStorageItemContains
);

Then(
  /^I expect the "([^"]*)?" site (local|session) storage item value to( not)? be "([^"]*)?"$/, RETRY(),
  fn.thenStorageItemEquals
);

Then(
  /^I expect the "([^"]*)?" site (local|session) storage item to( not)? exist$/, RETRY(),
  fn.thenStorageItemExists
);

Then(
  /^I expect the (?:window|page) title to( not)? contain (?:the "([^"]*)?" page's title|"([^"]*)?")$/, RETRY(),
  fn.thenTitleContains
);

Then(
  /^I expect the (?:window|page) title to( not)? (?:be|match) (?:the "([^"]*)?" page's title|"([^"]*)?")$/, RETRY(),
  fn.thenTitleEquals
);

Then(
  /^I expect the url to( not)? contain (?:the "([^"]*)?" page's url|"([^"]*)?"|the base url)$/, RETRY(),
  fn.thenUrlContains
);

Then(
  /^I expect the url to( not)? (?:be|match) (?:the "([^"]*)?" page's url|"([^"]*)?"|the base url)$/, RETRY(),
  fn.thenUrlEquals
);

Then(
  /^I expect the url path to( not)? contain "([^"]*)?"$/, RETRY(),
  fn.thenUrlPathContains
);

Then(
  /^I expect the url path to( not)? be "([^"]*)?"$/, RETRY(),
  fn.thenUrlPathEquals
);
