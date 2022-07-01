import type {
  WdioCheckElementMethodOptions,
  WdioCheckFullPageMethodOptions,
  WdioCheckScreenMethodOptions
} from "wdio-image-comparison-service";
import type { HookFunctions, Hooks } from "@wdio/types/build/Services";
import type { CucumberOptions, HookFunctionExtension } from "@wdio/cucumber-framework/build/types";
import type { PreFilterFunction } from "deep-diff";
import type { RecursivePartial } from "@common";

type SnapshotDirectories = {
  /** Directory under `outDir` where actual files are stored for comparison */
  actualDir?: string;
  /** Directory under `outDir` where baseline files are stored for comparison */
  baselineDir?: string;
  /** Directory under `outDir` where differences are stored for comparison */
  diffDir?: string;
};

type SnapshotOptions = {
  /** Directory to store the output of this comparable object in, relative to the config file */
  outDir?: string;
  /** Skip comparison, just save the actual files */
  skipCompare?: boolean;
} & SnapshotDirectories;

export type WdioImageCheckOptions = WdioCheckElementMethodOptions &
  WdioCheckFullPageMethodOptions &
  WdioCheckScreenMethodOptions;

export type ImageSnapshotOptions = {
  /** If true, adds platform e.g. mac, lin, win on the snapshot output directory */
  usePlatformDir?: boolean;
} & SnapshotOptions &
  WdioImageCheckOptions;

export type JSONSnapshotOptions = {
  /** Conditional diffing based on [jsonpath](https://www.npmjs.com/package/jsonpath) and regex  */
  regex?: {
    paths: string[];
    expressions: string[];
  };
  /** Same as `deep-diff`'s [prefilter](https://www.npmjs.com/package/deep-diff#pre-filtering-object-properties) function */
  prefilter?: PreFilterFunction;
} & SnapshotOptions;

export type NetworkRequestsIncludeProps = {
  [key in Exclude<keyof WdioInterceptorService.CompletedRequest, "pending" | "response">]?: boolean;
};

export type NetworkRequestSnapshotOptions = {
  /** Whether to apply sort before diffing */
  sort?: boolean;
  /** Request props to include in the captured snapshot */
  include?: NetworkRequestsIncludeProps;
  /** Filter only the requests to following paths when doing the diff */
  paths?: string[];
} & JSONSnapshotOptions;

type Snapshots = {
  /** Options used for comparing intercepted network requests */
  requests?: NetworkRequestSnapshotOptions;
  /** Options used for comparing http responses */
  responses?: JSONSnapshotOptions;
  /** Options used for comparing images */
  images?: ImageSnapshotOptions;
};

type RestrictedSnapshots = {
  /** Options used for comparing intercepted network requests */
  requests?: Omit<NetworkRequestSnapshotOptions, keyof SnapshotDirectories>;
  /** Options used for comparing http responses */
  responses?: Omit<JSONSnapshotOptions, keyof SnapshotDirectories>;
  /** Options used for comparing images */
  images?: Omit<ImageSnapshotOptions, keyof SnapshotDirectories>;
};

type RestrictedWdioConfig = {
  specs: string[];
  cucumberOpts: CucumberOptions;
  framework: string;
} & HookFunctions &
  HookFunctionExtension;

export type CustomConfig = {
  /** Custom: The base directory where most config paths will be resolved from */
  baseDir: string;
  /** Custom: Whether to run in debug mode or not */
  debug: boolean;
  /** Custom: The active locale. Used as primary context for reading generics' metadata */
  locale: string;
  /** Custom: Array of globs pointing to your meta files, relative to process.cwd() */
  metadata: string[];
  /** Custom: Reporter configurations */
  reports: {
    /** Directory to store the reports in, relative to process.cwd() */
    outDir: string;
    /** See `issueLinkTemplate` in [wdio allure reporter](https://webdriver.io/docs/allure-reporter/#configuration) */
    reportIssueLink: string;
  };
  /** Custom: Used for storing and reading properties that are dynamically set on runtime; See [Custom Configurations](https://webdriver.io/docs/browserobject#custom-configurations) */
  runtime: {
    /** The active metadata as of execution. Used for reading generics' properties on built-in gherkin steps */
    activeMeta?: string;
    /** The active selector key as of execution. Used for stitching selectors given on built-in gherkin steps */
    activeMetaSelectorKey?: string;
    /** The currently stored window size */
    windowSize?: { width: number; height: number };
    [key: string]: any;
  };
  /** Custom: The selenium standalone service install and runtime arguments */
  selenium: {
    version?: string,
    /** Use driver version that fits your current browser version;
     * @see [W3C Capabilities](https://www.browserstack.com/automate/capabilities?tag=selenium-4)
     * */
    drivers?: {};
  };
  /** Custom: Object containing properties of comparable files */
  snapshots: Snapshots;
  /** Override: Array of globs pointing to your spec files, relative to process.cwd() */
  specs: string[];
  /** Override: Array of globs pointing to spec files you want to exclude, relative to process.cwd() */
  exclude: string[];
  /** Custom: Array of globs pointing to your gherkin definition files, relative to process.cwd() */
  steps: string[];
  /** Custom: The number of retries to perform for a failed gherkin statement*/
  stepRetries: number;
  /** Custom: Default timeout for WebdriverIO to wait for a single test step to finish in milliseconds */
  stepTimeout: number;
  /** Custom: Only execute the features or scenarios with tags matching the expression */
  tags: string;
  /** Custom: Object containing keys that correspond to supported hooks */
  hooks: Hooks & HookFunctionExtension;
};

export type RestrictedCustomConfig = {
  /** Custom: Object containing properties of comparable files */
  snapshots?: RestrictedSnapshots;
} & Omit<RecursivePartial<CustomConfig>, "runtime" | "snapshots"> &
  Omit<RecursivePartial<WebdriverIO.Config>, keyof RestrictedWdioConfig>;

export type Config = Partial<CustomConfig> & WebdriverIO.Config;
