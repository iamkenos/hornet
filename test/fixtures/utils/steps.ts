import { configure } from "@config";
import merge from "lodash/merge";

export function givenJestMocksAreReset() {
  jest.resetAllMocks();
}

export function givenMock(any: any, create = false) {
  if (create) any = jest.fn();
  return any as jest.Mock;
}

export function givenBrowserConfig(config?: typeof browser.config) {
  const base = configure({
    baseUrl: "http://localhost:8080",
    metadata: ["../components/nonexisting.meta.ts", "../**/*.meta.ts"],
  });
  return merge({}, base, config);
}

export function givenBrowserPropMock(...props: (keyof typeof browser)[]) {
  props.forEach(prop => (browser[prop] as any) = jest.fn());
}
