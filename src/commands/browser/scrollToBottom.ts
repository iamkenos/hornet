import { JS_WINDOW_SCROLL_TO_BOTTOM } from "@commands";

export async function scrollToBottom() {
  await browser.execute(JS_WINDOW_SCROLL_TO_BOTTOM);
}
