import type { Selector } from "webdriverio";
import type { ExpectedCondition, EvaluationResult } from "./types";

export class ExpectedConditionsResult {
  private results: Map<string, EvaluationResult>;

  private selector: Selector;

  public constructor(selector?: Selector) {
    this.results = new Map();
    this.selector = selector;
  }

  public addResult(result: EvaluationResult) {
    this.results.set(result.name, result);
  }

  public isSuccess() {
    return Array.from(this.results.values()).every((result) => result.isSuccess && true);
  }

  public getMessage(expression: string, conditions: ExpectedCondition[], timeout: number, e: Error) {
    const results = Array.from(this.results.values());
    const success = results.filter((result) => result.isSuccess === true).length;
    const total = conditions.length;

    return `
  Expected conditions not met after waiting for ${timeout}ms
  Expression: ${expression}
  ${this.selector ? "Selector: " + this.selector : "Selector: " + browser.sessionId}
  Conditions Summary: ${success}/${total}
  ${total === 0 ? e.message : results.map((result) => result.message).join("------------------------------")}`;
  }
}
