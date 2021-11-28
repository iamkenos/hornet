import type { DragAndDropCoordinate } from "webdriverio";

export default async function (target: DragAndDropCoordinate) {
  await browser.execute((x, y) => window.scrollTo(x, y), target.x, target.y);
};
