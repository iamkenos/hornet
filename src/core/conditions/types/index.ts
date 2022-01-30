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

export type EvaluationResult = {
  name: string;
  actual: any;
  expected: any;
  passed: boolean;
  message: string;
};

export type CustomConditionFunction = () => Promise<CustomConditionResult>;

export type CustomConditionResult = Pick<EvaluationResult, "actual" | "expected" | "passed">;
