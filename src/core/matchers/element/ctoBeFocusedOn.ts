import { ExpectedConditions } from "../../conditions/expectedConditions";
import { Focused } from "../../conditions/element/focused";

export async function ctoBeFocusedOn(this: any, actual: Promise<WebdriverIO.Element>) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(selector, ctoBeFocusedOn.name)
    .addCondition(new Focused(!this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
