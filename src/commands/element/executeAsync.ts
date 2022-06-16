import { JS_ELEM_EXEC_ASYNC_FUNC } from "@commands";

export async function executeAsync(this: WebdriverIO.Element, name: string) {
  return await browser.execute(JS_ELEM_EXEC_ASYNC_FUNC, this, name);
}
