import { SizeContext } from "@core/commands";
import { ExpectedConditions, SizeSideEquals } from "@core/conditions";

export async function elementSizeSideToBeEqual(this: any, actual: Promise<WebdriverIO.Element>, side: SizeContext, expected: number) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementSizeSideToBeEqual.name, selector)
    .addCondition(new SizeSideEquals(side, expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
