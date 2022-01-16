import { ExpectedConditions } from "@core/conditions";
import { JS_MOUSE_CLICK, ClickWith } from "@core/commands";

export async function clickWith(this: WebdriverIO.Element, options?: ClickWith) {
  if (options?.move) {
    await this.moveIntoView(options.move);
  }

  switch (options?.button) {
    case "script": {
      await browser.execute(JS_MOUSE_CLICK);
      break;
    }
    default: {
      await this.click(options);
    }
  }
}
