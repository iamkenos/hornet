import * as b from "./browser";
import * as e from "./element";
import * as o from "./others";

export * from "./browser";
export * from "./element";
export * from "./others";

export default {
  addBrowserMatchers: () => {
    expect.extend({ browserAlertTextToBeContaining: b.browserAlertTextToBeContaining });
    expect.extend({ browserAlertTextToBeEqual: b.browserAlertTextToBeEqual });
    expect.extend({ browserAlertToBeExisting: b.browserAlertToBeExisting });
    expect.extend({ browserCookieToBeContaining: b.browserCookieToBeContaining });
    expect.extend({ browserCookieToBeEqual: b.browserCookieToBeEqual });
    expect.extend({ browserCookieToBeExisting: b.browserCookieToBeExisting });
    expect.extend({ browserTitleToBeContaining: b.browserTitleToBeContaining });
    expect.extend({ browserTitleToBeEqual: b.browserTitleToBeEqual });
    expect.extend({ browserToBeReady: b.browserToBeReady });
    expect.extend({ browserUrlPathToBeContaining: b.browserUrlPathToBeContaining });
    expect.extend({ browserUrlPathToBeEqual: b.browserUrlPathToBeEqual });
    expect.extend({ browserUrlToBeContaining: b.browserUrlToBeContaining });
    expect.extend({ browserUrlToBeEqual: b.browserUrlToBeEqual });
    expect.extend({ browserWindowCountToBeEqual: b.browserWindowCountToBeEqual });
    expect.extend({ browserWindowCountToBeLessThan: b.browserWindowCountToBeLessThan });
    expect.extend({ browserWindowCountToBeMoreThan: b.browserWindowCountToBeMoreThan });
  },
  addElementMatchers: () => {
    expect.extend({ elementAttributeToBeContaining: e.elementAttributeToBeContaining });
    expect.extend({ elementAttributeToBeEqual: e.elementAttributeToBeEqual });
    expect.extend({ elementAttributeToBeExisting: e.elementAttributeToBeExisting });
    expect.extend({ elementAxisLocationToBeEqual: e.elementAxisLocationToBeEqual });
    expect.extend({ elementCountToBeMoreThan: e.elementCountToBeMoreThan });
    expect.extend({ elementCountToBeLessThan: e.elementCountToBeLessThan });
    expect.extend({ elementCssPropertyToBeExisting: e.elementCssPropertyToBeExisting });
    expect.extend({ elementTextToBeContaining: e.elementTextToBeContaining });
    expect.extend({ elementTextToBeEqual: e.elementTextToBeEqual });
    expect.extend({ elementToBeDisplayed: e.elementToBeDisplayed });
    expect.extend({ elementToBeDisplayedInViewport: e.elementToBeDisplayedInViewport });
    expect.extend({ elementToBeEnabled: e.elementToBeEnabled });
    expect.extend({ elementToBeExisting: e.elementToBeExisting });
    expect.extend({ elementToBeFocused: e.elementToBeFocused });
    expect.extend({ elementToBeSelected: e.elementToBeSelected });
    expect.extend({ elementValueToBeContaining: e.elementValueToBeContaining });
    expect.extend({ elementValueToBeEqual: e.elementValueToBeEqual });
  },
  addOtherMatchers: () => {
    expect.extend({ arrayToBeContaining: o.arrayToBeContaining });
    expect.extend({ arrayToBeEquals: o.arrayToBeEquals });
    expect.extend({ conditionToBeTrue: o.conditionToBeTrue });
  }
};
