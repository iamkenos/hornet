import { Axis } from "@core/commands";
import { ExpectedConditions, AxisLocationEquals } from "@core/conditions";

export async function elementAxisLocationToBeEqual(this: any, actual: Promise<WebdriverIO.Element>, axis: Axis, expected: number) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementAxisLocationToBeEqual.name, selector)
    .addCondition(new AxisLocationEquals(axis, expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
