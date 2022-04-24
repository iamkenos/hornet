import { JS_ELEM_EXEC_ASYNC_FUNC } from "@core/commands";

export async function executeAsync(this: WebdriverIO.Element, name: string) {
  await browser.execute(JS_ELEM_EXEC_ASYNC_FUNC, this, name);
}
