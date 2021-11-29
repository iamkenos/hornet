declare global {
  namespace ExpectWebdriverIO {
    interface Matchers<R, T> {
      browserCookieToBeContaining(cookie: string, expected: string): R;
      browserCookieToBeEqual(cookie: string, expected: string): R;
      browserCookieToBeExisting(cookie: string): R;
      browserModalTextToBeContaining(expected: string): R;
      browserModalTextToBeEqual(expected: string): R;
      browserModalToBeExisting(): R;
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

      elementToBeExisting(): R;
      elementToBeFocused(): R;

      arrayToBeContaining(): R;
      arrayToBeEquals(): R;
      customConditionToBeTrue(): R;
    }
  }
}

export {};
