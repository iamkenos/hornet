declare global {
  namespace ExpectWebdriverIO {
    interface Matchers<R, T> {
      ctoBeExisting: () => Promise<void>; 
      ctoBeFocusedOn: () => Promise<void>;
    }
  }
}

export {};
