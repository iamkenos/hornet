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
(global.browser as typeof browser).execute = jest.fn();
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
