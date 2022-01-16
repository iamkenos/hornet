import { JS_MOUSE_CLICK, ClickWith, MouseButton } from "@core/commands";
import _ from "lodash";

export async function clickWith(this: WebdriverIO.Element, options?: ClickWith) {
  if (options?.move) {
    await this.moveIntoView(options.move);
  }

  switch (options?.button) {
    case MouseButton.SCRIPT: {
      await browser.execute(JS_MOUSE_CLICK, this);
      break;
    }
    case MouseButton.DOUBLE: {
      await this.doubleClick();
      break;
    }
    case null: {
      await this.click({ ...options, button: "left" });
      break;
    }
    default: {
      await this.click(options);
      break;
    }
  }
}
