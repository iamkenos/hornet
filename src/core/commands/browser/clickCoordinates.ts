import type { DragAndDropCoordinate } from "webdriverio";

export default async function (target: DragAndDropCoordinate, origin: "pointer" | "viewport" | WebdriverIO.Element = "pointer") {
  const { x, y } = target;
  await browser.performActions([
    {
      type: "pointer",
      id: "mousepointer",
      actions: [
        { type: "pointerMove", duration: 0, origin: origin, x: x, y: y },
        { type: "pointerDown", button: 0 },
        { type: "pause", duration: 10 },
        { type: "pointerUp", button: 0 }
      ]
    }
  ]);
  await browser.releaseActions();
};
