import type { DataTable } from "@cucumber/cucumber";
import { AlertAction, BrowserStorage, Count, ImageCompareContext, WindowDirection, WindowNavigation } from "@core/commands";
import { WebElement, getSelector, getUrl, getTitle } from "@core/generics";
import { parseToken, getDataTableRows } from "@core/gherkin";

export async function givenOnPage(meta: string) {
  await whenOpen(meta);
  await thenOnPage(meta);
}

export async function whenClean() {
  await browser.clean();
}

export async function whenCloseLastWindow() {
  await browser.closeLastWindow();
}

export async function whenCloseOtherWindows() {
  await browser.closeOtherWindows();
}

export async function whenCookieDeleted(cookie: string) {
  await browser.deleteCookie(cookie);
}

export async function whenCookiesDeleted() {
  await browser.deleteAllCookies();
}

export async function whenCookieSet(cookie: string, value: string) {
  await browser.setCookie(cookie, parseToken(value));
}

export async function whenNavigate(navigate: WindowNavigation, count: string) {
  const repeats = parseInt(count) || 1;
  for (let i = 0; i < repeats; i++) {
    switch (navigate) {
      case WindowNavigation.BACK: {
        await browser.back();
        break;
      }
      default: {
        await browser.forward();
        break;
      }
    }
  }
}

export async function whenObserveNetwork() {
  await browser.setupInterceptor();
}

export async function whenOpen(meta: string, url?: string) {
  switch (url) {
    case undefined:
    case null: {
      await browser.url(getUrl(meta));
      break;
    }
    default: {
      await browser.url(url);
      break;
    }
  }
}

export async function whenOpenNewWindow(meta: string, url?: string) {
  switch (url) {
    case undefined:
    case null: {
      await browser.newWindow(getUrl(meta));
      break;
    }
    default: {
      await browser.newWindow(url);
      break;
    }
  }
}

export async function whenPressKey(key: string, count: string) {
  const repeats = parseInt(count) || 1;
  for (let i = 0; i < repeats; i++) {
    await browser.keys(key);
  }
}

export async function whenPressKeys(keys: string) {
  await browser.keys(keys.split('+'));
}

export async function whenRefresh() {
  await browser.refresh();
}

export async function whenScrollTo(direction: WindowDirection) {
  switch (direction) {
    case WindowDirection.TOP: {
      await browser.scrollToTop();
      break;
    }
    default: {
      await browser.scrollToBottom();
      break;
    }
  }
}

export async function whenScrollToCoordinates(x: number, y: number) {
  await browser.scrollTo({ x, y });
}

export async function whenSetAlertAction(action: AlertAction) {
  switch (action) {
    case AlertAction.ACCEPT: {
      await browser.acceptAlert();
      break;
    }
    default: {
      await browser.dismissAlert();
      break;
    }
  }
}

export async function whenSetAlertText(value: string) {
  await browser.sendAlertText(parseToken(value));
}

export async function whenSetMaximize() {
  await browser.maximizeWindow();
}

export async function whenSetSize(width: number, height: number) {
  await browser.setWindowSize(width, height);
}

export async function whenStorageItemSet(key: string, context: BrowserStorage, value: string) {
  switch (context) {
    case BrowserStorage.LOCAL: {
      await browser.setLocalStorageItem({ key, value });
      break;
    }
    default: {
      await browser.setSessionStorageItem({ key, value });
      break;
    }
  }
}

export async function whenStorageItemsCleared(context: BrowserStorage) {
  switch (context) {
    case BrowserStorage.LOCAL: {
      await browser.clearLocalStorage();
      break;
    }
    default: {
      await browser.clearSessionStorage();
      break;
    }
  }
}

export async function whenSwitchToFrameOrParent(meta: string, key?: string) {
  switch (key) {
    case undefined:
    case null: {
      await browser.switchToParentFrame();
      break;
    }
    default: {
      const selector = getSelector(meta, key);
      const webelement = new WebElement(selector);
      const element = await webelement.$;
      await browser.switchToFrame(element);
      break;
    }
  }
}

export async function whenSwitchToParentWindow() {
  await browser.switchToParentWindow();
}

export async function whenSwitchToLastWindow() {
  await browser.switchToLastWindow();
}

export async function whenWait(ms: number) {
  await browser.pause(ms);
}

export async function whenWindowSizeStored() {
  await browser.storeWindowSize();
}

export async function whenWindowSizeRestored() {
  await browser.restoreWindowSize();
}

export async function thenAlertExisting(not: string) {
  const then = not ? expect(browser).not : expect(browser);

  await then.browserAlertToBeExisting();
}

export async function thenAlertTextContaining(not: string, value: string) {
  const then = not ? expect(browser).not : expect(browser);

  await then.browserAlertTextToBeContaining(parseToken(value));
}

export async function thenAlertTextEqual(not: string, value: string) {
  const then = not ? expect(browser).not : expect(browser);

  await then.browserAlertTextToBeEqual(parseToken(value));
}

export async function thenCookieContaining(cookie: string, not: string, value: string) {
  const then = not ? expect(browser).not : expect(browser);

  await then.browserCookieToBeContaining(cookie, parseToken(value));
}

export async function thenCookieExisting(cookie: string, not: string) {
  const then = not ? expect(browser).not : expect(browser);

  await then.browserCookieToBeExisting(cookie);
}

export async function thenCookieEqual(cookie: string, not: string, value: string) {
  const then = not ? expect(browser).not : expect(browser);

  await then.browserCookieToBeEqual(cookie, parseToken(value));
}

export async function thenCountEqual(not: string, value: number) {
  const then = not ? expect(browser).not : expect(browser);

  await then.browserWindowCountToBeEqual(value);
}

export async function thenCountLessOrMore(not: string, count: Count, value: number) {
  const then = not ? expect(browser).not : expect(browser);

  switch (count) {
    case Count.LESS: {
      await then.browserWindowCountToBeLessThan(value);
      break;
    }
    default: {
      await then.browserWindowCountToBeMoreThan(value);
      break;
    }
  }
}

/** @see  [GA > Dev Guides > Parameters](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters)*/
export async function thenGAEntriesSnapshotMatch(event: string, not: string, filename: string) {
  const then = not ? expect(browser).not : expect(browser);

  await then.browserGoogleAnalyticsToMatch(filename, event);
}

export async function thenHttpResponseSnapshotMatch(not: string, filename: string, request: string) {
  const then = not ? expect(browser).not : expect(browser);
  
  await then.browserHttpResponseToMatch(filename, JSON.parse(request));
}

export async function thenOnPage(meta: string) {
  const { config } = browser;
  await thenSiteReady();
  await thenUrlEqual(undefined, meta);
  await thenTitleEqual(undefined, meta);
  config.runtime.activeMeta = meta;
}

export async function thenNetworkCallsSnapshotMatch(header: string, not: string, filename: string) {
  const headers = !!header;
  const then = not ? expect(browser).not : expect(browser);

  await then.browserNetworkRequestsToMatch(filename, { include: { headers } })
}

export async function thenNetworkCallsOnPathsSnapshotMatch(header: string, not: string, filename: string, table: DataTable) {
  const paths = getDataTableRows(table, 1);
  const headers = !!header;
  const then = not ? expect(browser).not : expect(browser);

  await then.browserNetworkRequestsToMatch(filename, { paths, include: { headers } })
}

export async function thenNetworkCallsOnPathsSnapshotMatchExpressions(header: string, not: string, filename: string, table: DataTable) {
  const regex = { paths: getDataTableRows(table, 1), expressions: getDataTableRows(table, 2) };
  const headers = !!header;
  const then = not ? expect(browser).not : expect(browser);
  
  await then.browserNetworkRequestsToMatch(filename, { regex, include: { headers } })
}

export async function thenSiteReady() {
  const then = expect(browser);
 
  await then.browserToBeReady();
}

export async function thenSnapshotMatch(context: ImageCompareContext.PAGE | ImageCompareContext.VIEWPORT, not: string, filename: string) {
  const then = not ? expect(browser).not : expect(browser);

  await then.browserSnapshotToMatch(context, filename);
}

export async function thenStorageItemContaining(context: BrowserStorage, key: string, not: string, value: string) {
  const then = not ? expect(browser).not : expect(browser);

  await then.browserStorageItemToBeContaining(context, key, parseToken(value));
}

export async function thenStorageItemExisting(context: BrowserStorage, key: string, not: string) {
  const then = not ? expect(browser).not : expect(browser);

  await then.browserStorageItemToBeExisting(context, key);
}

export async function thenStorageItemEqual(context: BrowserStorage, key: string, not: string, value: string) {
  const then = not ? expect(browser).not : expect(browser);

  await then.browserStorageItemToBeEqual(context, key, parseToken(value));
}

export async function thenTitleContaining(not: string, meta: string, value?: string) {
  const then = not ? expect(browser).not : expect(browser);

  switch (value) {
    case undefined:
    case null: {
      await then.browserTitleToBeContaining(getTitle(meta))
      break;
    }
    default: {
      await then.browserTitleToBeContaining(parseToken(value))
      break;
    }
  }
}

export async function thenTitleEqual(not: string, meta: string, value?: string) {
  const then = not ? expect(browser).not : expect(browser);

  switch (value) {
    case undefined:
    case null: {
      await then.browserTitleToBeEqual(getTitle(meta))
      break;
    }
    default: {
      await then.browserTitleToBeEqual(parseToken(value))
      break;
    }
  }
}

export async function thenUrlContaining(not: string, meta: string, value?: string) {
  const then = not ? expect(browser).not : expect(browser);

  switch (value) {
    case undefined:
    case null: {
      if (meta) {
        await then.browserUrlToBeContaining(getUrl(meta))
      } else {
        await then.browserUrlToBeContaining(browser.config.baseUrl)
      }
      break;
    }
    default: {
      await then.browserUrlToBeContaining(parseToken(value))
    }
  }
}

export async function thenUrlEqual(not: string, meta: string, value?: string) {
  const then = not ? expect(browser).not : expect(browser);

  switch (value) {
    case undefined:
    case null: {
      if (meta) {
        await then.browserUrlToBeEqual(getUrl(meta))
      } else {
        await then.browserUrlToBeEqual(browser.config.baseUrl)
      }
      break;
    }
    default: {
      await then.browserUrlToBeEqual(parseToken(value))
    }
  }
}

export async function thenUrlPathContaining(not: string, value: string) {
  const then = not ? expect(browser).not : expect(browser);

  await then.browserUrlPathToBeContaining(parseToken(value))
}

export async function thenUrlPathEqual(not: string, value: string) {
  const then = not ? expect(browser).not : expect(browser);

  await then.browserUrlPathToBeEqual(parseToken(value))
}