import { JS_ELEM_SET_ATTRIBUTE } from "@core/commands";
import { KeyValuePair } from "@core/common";

export async function setAttribute(this: WebdriverIO.Element, kvp: KeyValuePair) {
  await browser.execute(JS_ELEM_SET_ATTRIBUTE, this, kvp.key, kvp.value);
}
