import type { Hooks, HookFunctions } from "@wdio/types/build/Services";
import type { HookFunctionExtension, CucumberOptions } from "@wdio/cucumber-framework/build/types";
import type { RecursivePartial } from "@core/common";

export interface ConfigArgs {
  /** Whether to run in debug mode or not */
  debug?: boolean;
  /** The base directory where most of the files will be resolved from; for simplicity, you can use __dirname */
  directory: string;
  /** The active locale. Used as primary context for reading generics' metadata */
  locale?: string;
  /** Array of globs pointing to your meta files, relative to the `directory` */
  metadata?: string[];
  /** Array of globs pointing to your gherkin definition files, relative to the `directory` */
  steps?: string[];
  /** The number of retries to perform for a failed gherkin statement*/
  stepRetries?: number;
  /** Default timeout for WebdriverIO to wait for a single test step to finish in milliseconds */
  stepTimeout?: number;
  /** Only execute the features or scenarios with tags matching the expression */
  tags?: string;
  /** Directory to store the reports in, relative to the `directory` */
  reportOutDir?: string;
  /** See `issueLinkTemplate` in [wdio allure reporter](https://webdriver.io/docs/allure-reporter/#configuration) */
  reportIssueLink?: string;
  /** Object containing keys that correspond to supported hooks */
  hooks?: Hooks & HookFunctionExtension;
}

interface ConfigRuntimeProps {
  /** Used for storing and reading runtime properties */
  runtime: {
    /** The active metadata as of execution. Used for reading generics' properties on built-in gherkin steps */
    activeMeta?: string;
    /** The active selector key as of execution. Used for stitching selectors given on built-in gherkin steps */
    activeMetaSelectorKey?: string;
    /** The currently stored window size */
    windowSize?: { width: number; height: number };
    [key: string]: any;
  };
}

export interface CustomConfig extends ConfigArgs, ConfigRuntimeProps {}

interface NoOverrides extends CustomConfig, HookFunctions, HookFunctionExtension {
  cucumberOpts: CucumberOptions;
}

export type Config = Omit<RecursivePartial<WebdriverIO.Config>, keyof NoOverrides>;
