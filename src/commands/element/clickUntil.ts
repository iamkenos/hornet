import type { ExpectedConditions } from "@conditions";
import type { ClickWith } from "@commands";

export async function clickUntil(this: WebdriverIO.Element, conditions: ExpectedConditions, options?: ClickWith) {
  const action = () => this.clickWith(options);
  conditions.setName(clickUntil.name).setAction(action);

  await conditions.expect();
}
