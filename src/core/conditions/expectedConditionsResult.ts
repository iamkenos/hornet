import type { Selector } from "webdriverio";
import type { EvaluationResult } from "./types";

export class ExpectedConditionsResult {
  private results: Map<string, EvaluationResult>;

  private name: string;

  private timeout: number;

  private selector: Selector;

  public constructor(name: string, timeout: number, selector?: Selector) {
    this.name = name,
    this.timeout = timeout;
    this.results = new Map();
    this.selector = selector;
  }

  public setTimeout(ms: number) {
    this.timeout = ms;
  }

  public addResult(result: EvaluationResult) {
    this.results.set(result.name, result);
  }

  public isPass() {
    return Array.from(this.results.values()).every((result) => result.passed && true);
  }

  public getMessage(e?: Error) {
    const results = Array.from(this.results.values());
    const success = results.filter((result) => result.passed === true).length;
    const total = this.results.size;

    return `Expected conditions not met after waiting for ${this.timeout}ms
Expression: ${this.name}
${this.selector ? `Selector: ${this.selector}` : `Session: ${browser.sessionId}`}
Conditions Summary: ${success}/${total}
${total === 0 ? e.message : results.map((result) => result.message).join("------------------------------")}`;
  }
}
