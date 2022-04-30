import type { Coordinates } from "@commands";

export async function scrollTo(target: Coordinates) {
  await browser.execute((x, y) => window.scrollTo(x, y), target.x, target.y);
}
