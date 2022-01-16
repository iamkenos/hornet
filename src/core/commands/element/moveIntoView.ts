import type { MoveToOptions } from "webdriverio";

export async function moveIntoView(this: WebdriverIO.Element, options?: MoveToOptions) {
  try {
    await this.scrollIntoView({ block: "center" });
    await this.moveTo(options);
  } catch (e) {
  }
}
