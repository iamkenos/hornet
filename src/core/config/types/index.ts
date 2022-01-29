import type {
  WdioCheckElementMethodOptions,
  WdioCheckFullPageMethodOptions,
  WdioCheckScreenMethodOptions
} from "wdio-image-comparison-service";
import type { Hooks, HookFunctions } from "@wdio/types/build/Services";
import type { HookFunctionExtension, CucumberOptions } from "@wdio/cucumber-framework/build/types";
import type { RecursivePartial } from "@core/common";

type SnapshotDirectories = {
  /** Directory under `outDir` where actual files are stored for comparison */
  actualDir?: string;
  /** Directory under `outDir` where baseline files are stored for comparison */
  baselineDir?: string;
  /** Directory under `outDir` where differences are stored for comparison */
  diffDir?: string;
};

type SnapshotOptions = SnapshotDirectories & {
  /** Directory to store the output of this comparable object in, relative to the config file */
  outDir?: string;
  /** Skip comparison, just save the actual files */
  skipCompare?: boolean;
};

type Snapshots = {
  /** Object containing properties of comparable files */
  snapshots?: {
    /** Options used for comparing intercepted network requests */
    requests?: SnapshotOptions;
    /** Options used for comparing http responses */
    responses?: SnapshotOptions;
    /** Options used for comparing images */
    images?: ImageSnapshotOptions;
  };
};

type RestrictedSnapshots = {
  /** Object containing properties of comparable files */
  snapshots?: {
    /** Options used for comparing intercepted network requests */
    requests?: Omit<SnapshotOptions, keyof SnapshotDirectories>;
    /** Options used for comparing http responses */
    responses?: Omit<SnapshotOptions, keyof SnapshotDirectories>;
    /** Options used for comparing images */
    images?: Omit<ImageSnapshotOptions, keyof SnapshotDirectories>;
  };
};

export type ImageSnapshotOptions = SnapshotOptions & {
  /** If true, adds platform e.g. mac, lin, win on the snapshot output directory */
  usePlatformDir?: boolean;
  /** Global options to use when comparing images */
  options?: WdioCheckElementMethodOptions | WdioCheckFullPageMethodOptions | WdioCheckScreenMethodOptions;
};

export interface ConfigArgs extends RestrictedSnapshots {
  /** The base directory where most of the files will be resolved from; for simplicity, you can use __dirname */
  baseDir: string;
  /** Whether to run in debug mode or not */
  debug?: boolean;
  /** The active locale. Used as primary context for reading generics' metadata */
  locale?: string;
  /** Array of globs pointing to your meta files, relative to the `directory` */
  metadata?: string[];
  /** Directory to store the reports in, relative to the `directory` */
  reportOutDir?: string;
  /** See `issueLinkTemplate` in [wdio allure reporter](https://webdriver.io/docs/allure-reporter/#configuration) */
  reportIssueLink?: string;
  /** Array of globs pointing to your gherkin definition files, relative to the `directory` */
  steps?: string[];
  /** The number of retries to perform for a failed gherkin statement*/
  stepRetries?: number;
  /** Default timeout for WebdriverIO to wait for a single test step to finish in milliseconds */
  stepTimeout?: number;
  /** Only execute the features or scenarios with tags matching the expression */
  tags?: string;
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

export interface CustomConfig extends Omit<ConfigArgs, keyof RestrictedSnapshots>, ConfigRuntimeProps, Snapshots {}

interface NoOverrides extends CustomConfig, HookFunctions, HookFunctionExtension {
  cucumberOpts: CucumberOptions;
}

export type Config = Omit<RecursivePartial<WebdriverIO.Config>, keyof NoOverrides>;
