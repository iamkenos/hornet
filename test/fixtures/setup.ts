import { sync as clean } from "rimraf";
declare let global: any;

// remove coverage folder
clean("./test/.coverage");

// mock wdio browser
(global.$ as typeof $) = jest.fn();
(global.$$ as typeof $$) = jest.fn();
// @ts-ignore
(global.browser as typeof browser) = jest.fn();
(global.browser as typeof browser).$ = jest.fn();
(global.browser as typeof browser).$$ = jest.fn();
(global.browser as typeof browser).addCommand = jest.fn();
(global.browser as typeof browser).clean = jest.fn();
(global.browser as typeof browser).conditions = jest.fn();
(global.browser as typeof browser).execute = jest.fn();
(global.browser as typeof browser).restoreWindowSize = jest.fn();
(global.browser as typeof browser).storeWindowSize = jest.fn();
(global.browser as typeof browser).takeScreenshot = jest.fn();
(global.browser as typeof browser).url = jest.fn();
(global.browser as typeof browser).waitUntil = jest.fn();
// @ts-ignore
(global.browser as typeof browser).config = {};

// disable console logging
global.console = {
  ...console,
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};
