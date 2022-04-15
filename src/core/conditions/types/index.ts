import type {
  WdioCheckFullPageMethodOptions,
  WdioCheckScreenMethodOptions,
  WdioCheckElementMethodOptions
} from "wdio-image-comparison-service";

export type { ImageCompareResult } from "webdriver-image-comparison";

export type ImageSnapshotContextOptions = {
  page: WdioCheckFullPageMethodOptions;
  viewport: WdioCheckScreenMethodOptions;
  element: WdioCheckElementMethodOptions;
};

export type ExpectedConditionResult = {
  name: string;
  actual: any;
  expected: any;
  passed: boolean;
  message: string;
};

export type ExpectedConditionsResult = {
  evaluations: ExpectedConditionResult[];
  message: string;
  passed: boolean;
};
