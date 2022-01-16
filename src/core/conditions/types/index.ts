export type EvaluationResult = {
  name: string;
  actual: any;
  expected: any;
  passed: boolean;
  message: string;
};

export type CustomConditionFunction = () => Promise<CustomConditionResult>;

export type CustomConditionResult = Pick<EvaluationResult, "actual" | "expected" | "passed">