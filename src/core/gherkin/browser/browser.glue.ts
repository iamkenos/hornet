import type { DataTable } from "@cucumber/cucumber";
import type { HttpRequestOptions } from "@core/commands";

import {
  AlertAction,
  BrowserStorage,
  Count,
  ImageCompareContext,
  WindowDirection,
  WindowNavigation
} from "@core/commands";
import { isJSON } from "@core/common";
import { MetaAdapter, WebElement } from "@core/generics";
import { GherkinAdapter } from "@core/gherkin";

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
  await browser.setCookie(cookie, GherkinAdapter.parseToken(value));
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
      await browser.url(MetaAdapter.getUrl(meta));
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
      await browser.newWindow(MetaAdapter.getUrl(meta));
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
  await browser.sendAlertText(GherkinAdapter.parseToken(value));
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
      const selector = MetaAdapter.getSelector(meta, key);
      const webelement = new WebElement(selector);
      const element = await webelement.$();
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

export async function thenAlertExists(not: boolean) {
  const then = await browser.conditions();

  await then.alertExists(not).expect();
}

export async function thenAlertTextContains(not: boolean, value: string) {
  const then = await browser.conditions();

  await then.alertTextContains(GherkinAdapter.parseToken(value), not).expect();
}

export async function thenAlertTextEquals(not: boolean, value: string) {
  const then = await browser.conditions();

  await then.alertTextEquals(GherkinAdapter.parseToken(value), not).expect();
}

export async function thenCookieContains(cookie: string, not: boolean, value: string) {
  const then = await browser.conditions();

  await then.cookieContains(GherkinAdapter.parseToken(cookie), GherkinAdapter.parseToken(value), not).expect();
}

export async function thenCookieEquals(cookie: string, not: boolean, value: string) {
  const then = await browser.conditions();

  await then.cookieEquals(GherkinAdapter.parseToken(cookie), GherkinAdapter.parseToken(value), not).expect();
}

export async function thenCookieExists(cookie: string, not: boolean) {
  const then = await browser.conditions();

  await then.cookieExists(GherkinAdapter.parseToken(cookie), not).expect();
}

export async function thenCountEquals(not: boolean, value: number) {
  const then = await browser.conditions();

  await then.windowCountEquals(value, not).expect();
}

export async function thenCountLessOrMore(not: boolean, count: Count, value: number) {
  const then = await browser.conditions();

  switch (count) {
    case Count.LESS: {
      await then.windowCountLessThan(value, not).expect();
      break;
    }
    default: {
      await then.windowCountMoreThan(value, not).expect();
      break;
    }
  }
}

/** @see  [GA > Dev Guides > Parameters](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters)*/
export async function thenGAEntriesSnapshotMatch(event: string, not: boolean, filename: string) {
  const then = await browser.conditions();

  await then.googleAnalyticsMatch(filename, event, undefined, not).expect();
}

export async function thenHttpResponseSnapshotMatch(not: boolean, filename: string, request: HttpRequestOptions) {
  const response = await browser.sendRequest(request.url as string, request);
  const comparable = { statusCode: response.statusCode, body: isJSON(response.body) ? JSON.parse(response.body) : response.body };
  const then = await browser.conditions();

  await then.jsonSnapshotMatch(filename, comparable, browser.config.snapshots.responses, not).expect();
}

export async function thenOnPage(meta: string) {
  const { config } = browser;
  await thenSiteReady();
  await thenUrlEquals(undefined, meta);
  await thenTitleEquals(undefined, meta);
  config.runtime.activeMeta = meta;
}

export async function thenNetworkCallsSnapshotMatch(header: string, not: boolean, filename: string) {
  const headers = !!header;
  const then = await browser.conditions();

  await then.networkRequestsMatch(filename, { include: { headers } }, not).expect();
}

export async function thenNetworkCallsOnPathsSnapshotMatch(header: string, not: boolean, filename: string, table: DataTable) {
  const paths = GherkinAdapter.getDataTableRows(table, 1);
  const headers = !!header;
  const then = await browser.conditions();

  await then.networkRequestsMatch(filename, { paths, include: { headers } }, not).expect();
}

export async function thenNetworkCallsOnPathsSnapshotMatchExpressions(header: string, not: boolean, filename: string, table: DataTable) {
  const regex = { paths: GherkinAdapter.getDataTableRows(table, 1), expressions: GherkinAdapter.getDataTableRows(table, 2) };
  const headers = !!header;
  const then = await browser.conditions();
  
  await then.networkRequestsMatch(filename, { regex, include: { headers } }, not).expect();
}

export async function thenSiteReady() {
  const then = await browser.conditions();
 
  await then.ready().expect();
}

export async function thenSnapshotMatch(context: ImageCompareContext.PAGE | ImageCompareContext.VIEWPORT, not: boolean, filename: string) {
  const then = await browser.conditions();

  await then.snapshotMatch(context, filename, undefined, not).expect();
}

export async function thenStorageItemContains(context: BrowserStorage, key: string, not: boolean, value: string) {
  const then = await browser.conditions();

  await then.storageItemContains(context, key, value, not).expect();
}

export async function thenStorageItemEquals(context: BrowserStorage, key: string, not: boolean, value: string) {
  const then = await browser.conditions();

  await then.storageItemEquals(context, key, value, not).expect();
}

export async function thenStorageItemExists(context: BrowserStorage, key: string, not: boolean) {
  const then = await browser.conditions();

  await then.storageItemExists(context, key, not).expect();
}

export async function thenTitleContains(not: boolean, meta: string, value?: string) {
  const then = await browser.conditions();

  switch (value) {
    case undefined:
    case null: {
      await then.titleContains(MetaAdapter.getTitle(meta), not).expect();
      break;
    }
    default: {
      await then.titleContains(GherkinAdapter.parseToken(value), not).expect();
      break;
    }
  }
}

export async function thenTitleEquals(not: boolean, meta: string, value?: string) {
  const then = await browser.conditions();

  switch (value) {
    case undefined:
    case null: {
      await then.titleEquals(MetaAdapter.getTitle(meta), not).expect();
      break;
    }
    default: {
      await then.titleEquals(GherkinAdapter.parseToken(value), not).expect();
      break;
    }
  }
}

export async function thenUrlContains(not: boolean, meta: string, value?: string) {
  const then = await browser.conditions();

  switch (value) {
    case undefined:
    case null: {
      if (meta) {
        await then.urlContains(MetaAdapter.getUrl(meta), not).expect();
      } else {
        await then.urlContains(browser.config.baseUrl, not).expect();
      }
      break;
    }
    default: {
      await then.urlContains(GherkinAdapter.parseToken(value), not).expect();
    }
  }
}

export async function thenUrlEquals(not: boolean, meta: string, value?: string) {
  const then = await browser.conditions();

  switch (value) {
    case undefined:
    case null: {
      if (meta) {
        await then.urlEquals(MetaAdapter.getUrl(meta), not).expect();
      } else {
        await then.urlEquals(browser.config.baseUrl, not).expect();
      }
      break;
    }
    default: {
      await then.urlEquals(GherkinAdapter.parseToken(value), not).expect();
    }
  }
}

export async function thenUrlPathContains(not: boolean, value: string) {
  const then = await browser.conditions();

  await then.urlPathContains(GherkinAdapter.parseToken(value), not).expect();
}

export async function thenUrlPathEquals(not: boolean, value: string) {
  const then = await browser.conditions();

  await then.urlPathEquals(GherkinAdapter.parseToken(value), not).expect();
}