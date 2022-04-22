import { JS_WINDOW_SCROLL_TO_BOTTOM } from "@hornet/core/commands";

export async function scrollToBottom() {
  await browser.execute(JS_WINDOW_SCROLL_TO_BOTTOM);
}
