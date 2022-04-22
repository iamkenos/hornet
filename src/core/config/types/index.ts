import type {
  WdioCheckElementMethodOptions,
  WdioCheckFullPageMethodOptions,
  WdioCheckScreenMethodOptions
} from "wdio-image-comparison-service";
import type { HookFunctions, Hooks } from "@wdio/types/build/Services";
import type { CucumberOptions, HookFunctionExtension } from "@wdio/cucumber-framework/build/types";
import type { PreFilterFunction } from "deep-diff";
import type { RecursivePartial } from "@hornet/core/common";

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
    requests?: NetworkRequestSnapshotOptions;
    /** Options used for comparing http responses */
    responses?: JsonSnapshotOptions;
    /** Options used for comparing images */
    images?: ImageSnapshotOptions;
  };
};

type RestrictedSnapshots = {
  /** Object containing properties of comparable files */
  snapshots?: {
    /** Options used for comparing intercepted network requests */
    requests?: Omit<NetworkRequestSnapshotOptions, keyof SnapshotDirectories>;
    /** Options used for comparing http responses */
    responses?: Omit<JsonSnapshotOptions, keyof SnapshotDirectories>;
    /** Options used for comparing images */
    images?: Omit<ImageSnapshotOptions, keyof SnapshotDirectories>;
  };
};

export type ImageSnapshotOptions = SnapshotOptions & WdioCheckElementMethodOptions & WdioCheckFullPageMethodOptions & WdioCheckScreenMethodOptions & {
  /** If true, adds platform e.g. mac, lin, win on the snapshot output directory */
  usePlatformDir?: boolean;
};

export type JsonSnapshotOptions = SnapshotOptions & {
  /** Conditional diffing based on [jsonpath](https://www.npmjs.com/package/jsonpath) and regex  */
  regex?: {
    paths: string[],
    expressions: string[]
  };
  /** Same as `deep-diff`'s [prefilter](https://www.npmjs.com/package/deep-diff#pre-filtering-object-properties) function */
  prefilter?: PreFilterFunction;
};

export type NetworkRequestsIncludedProps = {
  [key in Exclude<keyof WdioInterceptorService.CompletedRequest, "pending" | "response">]?: boolean;
}

export type NetworkRequestSnapshotOptions = JsonSnapshotOptions & {
  /** Whether to apply sort before diffing */
  sort?: boolean;
  /** Request props to include in the captured snapshot */
  include?: NetworkRequestsIncludedProps
  /** Filter only the requests to following paths when doing the diff */
  paths?: string[];
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
