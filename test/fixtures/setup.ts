import { sync as clean } from "rimraf";
declare let global: any;

// remove coverage folder
clean("./test/.coverage");

// mock wdio browser
global.browser = jest.fn();
global.browser.config = {};

// disable console logging
global.console = {
  ...console,
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};
