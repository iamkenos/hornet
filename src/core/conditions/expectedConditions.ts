import { ExpectedConditionsError } from "./expectedConditionsError";
import { ExpectedConditionsResult } from "./expectedConditionsResult";
import type { Selector } from "webdriverio";
import type { ExpectedCondition } from "./expectedCondition";

export class ExpectedConditions {
  private readonly selector?: string | Selector;

  private readonly result: ExpectedConditionsResult;

  private readonly conditions: ExpectedCondition[];

  private name: string;

  private action: Function;

  private timeout: number;

  public constructor(name?: string, selector?: string | Selector) {
    this.name = name || this.constructor.name;
    this.selector = selector;
    this.conditions = [];
    this.timeout = browser.config.waitforTimeout;
    this.result = new ExpectedConditionsResult(this.name, this.timeout, this.selector);
  }

  public addCondition(condition: ExpectedCondition) {
    this.conditions.push(condition.setSelector(this.selector));
    return this;
  }

  public setName(name: string) {
    this.name = name;
    return this;
  }

  public setAction(action: Function) {
    this.action = action;
    return this;
  }

  public setTimeout(ms: number) {
    this.timeout = ms;
    this.result.setTimeout(ms);
    return this;
  }

  public async evaluate() {
    try {
      return await this.expect();
    } catch (e) {
      return this.result;
    }
  }

  public async expect() {
    try {
      await browser.waitUntil(
        async () => {
          this.action !== undefined && await this.action();
          for (let i = 0; i < this.conditions.length; i++) {
            this.result.addResult(await this.conditions[i].evaluate());
          }
          return this.result.isPass();
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
