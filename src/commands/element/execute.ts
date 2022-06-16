import { JS_ELEM_EXEC_FUNC } from "@commands";

export async function execute(this: WebdriverIO.Element, name: string) {
  return await browser.execute(JS_ELEM_EXEC_FUNC, this, name);
}
