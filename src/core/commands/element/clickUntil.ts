import type { ExpectedConditions } from "@hornet/core/conditions";
import type { ClickWith } from "@hornet/core/commands";

export async function clickUntil(this: WebdriverIO.Element, conditions: ExpectedConditions, options?: ClickWith) {
  const action = () => this.clickWith(options);
  await conditions.setName(clickUntil.name).setAction(action).expect();
}
