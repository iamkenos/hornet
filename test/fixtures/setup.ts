// mock wdio browser
(global.$ as typeof $) = jest.fn();
(global.$$ as typeof $$) = jest.fn();
((global as any).browser as typeof browser) = jest.fn() as any;
((global as any).browser as typeof browser).$ = jest.fn();
((global as any).browser as typeof browser).$$ = jest.fn();
((global as any).browser as typeof browser).capabilities = { platform: "linux", browserName: "google chrome", browserVersion: "69.420" };
((global as any).browser as typeof browser).addCommand = jest.fn();
((global as any).browser as typeof browser).clean = jest.fn();
((global as any).browser as typeof browser).checkFullPageScreen = jest.fn();
((global as any).browser as typeof browser).checkScreen = jest.fn();
((global as any).browser as typeof browser).checkElement = jest.fn();
((global as any).browser as typeof browser).conditions = jest.fn();
((global as any).browser as typeof browser).execute = jest.fn();
((global as any).browser as typeof browser).getAlertText = jest.fn();
((global as any).browser as typeof browser).getCookies = jest.fn();
((global as any).browser as typeof browser).getLocalStorageItem = jest.fn();
((global as any).browser as typeof browser).getSessionStorageItem = jest.fn();
((global as any).browser as typeof browser).getRequests = jest.fn();
((global as any).browser as typeof browser).getTitle = jest.fn();
((global as any).browser as typeof browser).getUrl = jest.fn();
((global as any).browser as typeof browser).getWindowHandles = jest.fn();
((global as any).browser as typeof browser).keys = jest.fn();
((global as any).browser as typeof browser).pause = jest.fn();
((global as any).browser as typeof browser).restoreWindowSize = jest.fn();
((global as any).browser as typeof browser).storeWindowSize = jest.fn();
((global as any).browser as typeof browser).takeScreenshot = jest.fn();
((global as any).browser as typeof browser).url = jest.fn();
((global as any).browser as typeof browser).waitUntil = jest.fn();
((global as any).browser as typeof browser).config = {} as any;

// disable console logging
global.console = {
  ...console,
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

