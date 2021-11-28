import { JS_WINDOW_SCROLL_TO_BOTTOM } from "@core/utils/constants";

export default async function () {
  await browser.execute(JS_WINDOW_SCROLL_TO_BOTTOM);
};
