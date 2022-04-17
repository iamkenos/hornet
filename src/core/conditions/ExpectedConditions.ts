import type { ExpectedCondition } from "./expectedCondition";
import type { ExpectedConditionResult, ExpectedConditionsResult } from "./types";

export class ExpectedConditions {
  private name: string;

  private conditions: ExpectedCondition[];

  private evaluations: Map<string, ExpectedConditionResult>;

  private result: ExpectedConditionsResult;

  private action: Function;

  private timeout: number;

  public constructor(name?: string) {
    this.name = name || this.constructor.name;
    this.conditions = [];
    this.evaluations = new Map();
    this.timeout = browser.config.waitforTimeout;
  }

  private getResult() {
    const evaluations = Array.from(this.evaluations.values());
    const failed = evaluations.filter((result) => !result.passed).length;
    const total = this.evaluations.size;

    return {
      passed: failed === 0,
      evaluations: evaluations,
      message: `${failed}/${total} expected conditions not met after waiting for ${this.timeout}:
Expression: ${this.name}
${evaluations.map((result) => result.message).join("\n  ------------------------------")}`};
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
    return this;
  }

  public addCondition(condition: ExpectedCondition) {
    this.conditions.push(condition);
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
        async() => {
          this.action !== undefined && (await this.action());
          for (let i = 0; i < this.conditions.length; i++) {
            const evaluation = await this.conditions[i].evaluate();
            this.evaluations.set(evaluation.name, evaluation);
          }
          this.result = this.getResult();
          return this.result.passed;
        },
        {
          timeout: this.timeout,
          interval: 500
        }
      );
      return this.result;
    } catch (e) {
      throw new Error(this.result?.message || e.message);
    }
  }
}
