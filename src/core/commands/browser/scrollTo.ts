import type { Coordinates } from "@core/commands/types";

export default async function (target: Coordinates) {
  await browser.execute((x, y) => window.scrollTo(x, y), target.x, target.y);
};
