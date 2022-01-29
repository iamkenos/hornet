import { Axis, BrowserStorage, SizeContext, ImageCompareContext } from "@core/commands";
import { ImageSnapshotOptions } from "@core/conditions";
declare global {
  
  namespace ExpectWebdriverIO {
    interface Matchers<R, T> {
      browserAlertTextToBeContaining(expected: string): R;
      browserAlertTextToBeEqual(expected: string): R;
      browserAlertToBeExisting(): R;
      browserCookieToBeContaining(cookie: string, expected: string): R;
      browserCookieToBeEqual(cookie: string, expected: string): R;
      browserCookieToBeExisting(cookie: string): R;
      browserSnapshotToMatch(context: ImageCompareContext.PAGE | ImageCompareContext.VIEWPORT, filename: string, options?: ImageSnapshotOptions[ImageCompareContext.PAGE | ImageCompareContext.VIEWPORT]): R;
      browserStorageItemToBeContaining(context: BrowserStorage, key: string, expected: string): R;
      browserStorageItemToBeEqual(context: BrowserStorage, key: string, expected: string): R;
      browserStorageItemToBeExisting(context: BrowserStorage, key: string): R;
      browserTitleToBeContaining(expected: string): R;
      browserTitleToBeEqual(expected: string): R;
      browserToBeReady(): R;
      browserUrlPathToBeContaining(expected: string): R;
      browserUrlPathToBeEqual(expected: string): R;
      browserUrlToBeContaining(expected: string): R;
      browserUrlToBeEqual(expected: string): R;
      browserWindowCountToBeEqual(expected: number): R;
      browserWindowCountToBeLessThan(expected: number): R;
      browserWindowCountToBeMoreThan(expected: number): R;

      elementAttributeToBeContaining(attribute: string, expected: string): R;
      elementAttributeToBeEqual(attribute: string, expected: string): R;
      elementAttributeToBeExisting(attribute: string): R;
      elementAxisLocationToBeEqual(axis: Axis, expected: number): R;
      elementCountToBeEqual(expected: number): R;
      elementCountToBeLessThan(expected: number): R;
      elementCountToBeMoreThan(expected: number): R;
      elementCssPropertyToBeExisting(cssProperty: string): R;
      elementSizeSideToBeEqual(side: SizeContext, expected: number): R;
      elementSizeToBeEqual(width: number, height: number): R;
      elementSnapshotToMatch(filename: string, options?: ImageSnapshotOptions[ImageCompareContext.ELEMENT]): R;
      elementTextToBeContaining(expected: string): R;
      elementTextToBeEqual(expected: string): R;
      elementToBeDisplayed(): R;
      elementToBeDisplayedInViewport(): R;
      elementToBeEnabled(): R;
      elementToBeExisting(): R;
      elementToBeFocused(): R;
      elementToBeSelected(): R;
      elementValueToBeContaining(expected: string): R;
      elementValueToBeEqual(expected: string): R;

      arrayToBeContaining(expected: any[]): R;
      arrayToBeEqual(expected: any[]): R;
      customConditionToBeTrue(): R;
    }
  }
}

export {};
