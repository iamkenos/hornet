import merge from "lodash/merge";
import path from "path";

export function givenJestMocksAreReset() {
  jest.resetAllMocks();
}

export function givenMock(any: any, create = false) {
  if (create) any = jest.fn();
  return any as jest.Mock;
}

export function givenBrowserConfig(config?: typeof browser.config) {
  const base: Partial<typeof browser.config> = {
    // customizations
    locale: "default",
    runtime: {
      activeMeta: undefined,
      activeMetaSelectorKey: undefined,
    },
    metadata: [
      path.resolve(__dirname, "../components/nonexisting.meta"),
      path.resolve(__dirname, "../components/navigation-bar.meta"),
      path.resolve(__dirname, "../pages/demo.meta.ts"),
      path.resolve(__dirname, "../pages/iframe/iframe.meta.ts")
    ],
    // defautls
    baseUrl: "http://localhost:8080"
  };
  return merge({}, base, config);
}

export function givenBrowserPropMock(...props: (keyof typeof browser)[]) {
  props.forEach(prop => (browser[prop] as any) = jest.fn());
}
