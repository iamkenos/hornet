import type { Coordinates, ClickPointerOrigin } from "@core/commands/types";

export default async function (target: Coordinates, origin: ClickPointerOrigin = "pointer") {
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
