import { JS_ELEM_SET_ATTRIBUTE } from "@hornet/core/commands";
import { KeyValuePair } from "@hornet/core/common";

export async function setAttribute(this: WebdriverIO.Element, kvp: KeyValuePair) {
  await browser.execute(JS_ELEM_SET_ATTRIBUTE, this, kvp.key, kvp.value);
}
