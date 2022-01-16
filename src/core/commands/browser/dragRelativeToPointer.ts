import type { Coordinates } from "@core/commands";

export async function dragRelativeToPointer(target: Coordinates, dragDuration = 500) {
  await browser.performActions([
    {
      type: "pointer",
      id: "mousepointer",
      actions: [
        { type: "pointerDown", button: 0 },
        { type: "pause", duration: 10 },
        {
          type: "pointerMove",
          dragDuration,
          origin: "pointer",
          x: target.x,
          y: target.y
        },
        { type: "pointerUp", button: 0 }
      ]
    }
  ]);
  await browser.releaseActions();
};
