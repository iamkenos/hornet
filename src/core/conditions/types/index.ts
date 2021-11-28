import type { Selector } from "webdriverio";

export interface ExpectedCondition {
  name: string;
  evaluate(selector?: Selector): Promise<EvaluationResult>;
}

export type EvaluationResult = {
  actual: any;
  expected: any;
  isSuccess: boolean;
  name: string;
  message: string;
};

export type CustomConditionFunction = () => CustomConditionResult;

export type CustomConditionResult = Pick<EvaluationResult, "actual" | "expected" | "isSuccess">