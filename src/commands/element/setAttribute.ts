import { JS_ELEM_SET_ATTRIBUTE } from "@commands";
import { KeyValuePair } from "@common";

export async function setAttribute(this: WebdriverIO.Element, kvp: KeyValuePair) {
  await browser.execute(JS_ELEM_SET_ATTRIBUTE, this, kvp.key, kvp.value);
}
