import { JS_ELEM_SET_ATTRIBUTE } from "@core/commands";
import { KVP } from "@core/common";

export async function setAttribute(this: WebdriverIO.Element, kvp: KVP) {
  await browser.execute(JS_ELEM_SET_ATTRIBUTE, this, kvp.key, kvp.value);
}
