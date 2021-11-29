import { ExpectedConditions } from "../../conditions/expectedConditions";
import { Existing } from "../../conditions/element";

export async function ctoBeExisting(this: any, actual: Promise<WebdriverIO.Element>) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(selector, ctoBeExisting.name)
    .addCondition(new Existing(!this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
