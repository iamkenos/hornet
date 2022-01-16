import { KVP, JS_ELEM_SET_ATTRIBUTE } from "@core/commands";

export async function setAttribute(this: WebdriverIO.Element, kvp: KVP) {
  await browser.execute(JS_ELEM_SET_ATTRIBUTE, this, kvp.key, kvp.value);
}
