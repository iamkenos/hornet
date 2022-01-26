import { ExpectedConditions, SizeEquals } from "@core/conditions";

export async function elementSizeToBeEqual(this: any, actual: Promise<WebdriverIO.Element>, width: number, height: number) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementSizeToBeEqual.name, selector)
    .addCondition(new SizeEquals(width, height, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
