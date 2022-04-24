import { JS_ELEM_EXEC_FUNC } from "@core/commands";

export async function execute(this: WebdriverIO.Element, name: string) {
  await browser.execute(JS_ELEM_EXEC_FUNC, this, name);
}
