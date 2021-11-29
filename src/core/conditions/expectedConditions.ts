import type { Selector } from "webdriverio";
import type { ExpectedCondition } from "./types";
import { ExpectedConditionsError } from "./expectedConditionsError";
import { ExpectedConditionsResult } from "./expectedConditionsResult";

export class ExpectedConditions {
  private readonly name: string;

  private readonly selector?: string | Selector;

  private readonly result: ExpectedConditionsResult;

  private readonly conditions: ExpectedCondition[];

  private timeout: number;

  public constructor(name?: string, selector?: string | Selector) {
    this.name = name || this.constructor.name;
    this.selector = selector;
    this.conditions = [];
    this.timeout = browser.config.waitforTimeout;
    this.result = new ExpectedConditionsResult(this.name, this.timeout, this.selector);
  }

  public addCondition(condition: ExpectedCondition) {
    this.conditions.push(condition);
    return this;
  }

  public setTimeout(ms: number) {
    this.timeout = ms;
    this.result.setTimeout(ms);
    return this;
  }

  public async wait() {
    try {
      return await this.assert();
    } catch (e) {
      return this.result;
    }
  }

  public async assert() {
    try {
      await browser.waitUntil(
        async () => {
          for (let i = 0; i < this.conditions.length; i++) {
            this.result.addResult(await this.conditions[i].evaluate(this.selector));
          }
          return this.result.isSuccess();
        },
        {
          timeout: this.timeout,
          interval: 500
        }
      );
      return this.result;
    } catch (e) {
      throw new ExpectedConditionsError(this.result.getMessage(e));
    }
  }
}
