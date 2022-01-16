declare global {
  
  namespace ExpectWebdriverIO {
    interface Matchers<R, T> {
      browserAlertTextToBeContaining(expected: string): R;
      browserAlertTextToBeEqual(expected: string): R;
      browserAlertToBeExisting(): R;
      browserCookieToBeContaining(cookie: string, expected: string): R;
      browserCookieToBeEqual(cookie: string, expected: string): R;
      browserCookieToBeExisting(cookie: string): R;
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

      elementTextToBeContaining(expected: string): R;
      elementTextToBeEqual(expected: string): R;
      elementToBeExisting(): R;
      elementToBeFocused(): R;
      elementValueToBeContaining(expected: string): R;
      elementValueToBeEqual(expected: string): R;

      arrayToBeContaining(): R;
      arrayToBeEquals(): R;
      customConditionToBeTrue(): R;
    }
  }
}

export {};
