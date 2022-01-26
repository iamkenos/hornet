import { JS_MOUSE_CLICK, ClickWith, ClickAction } from "@core/commands";

export async function clickWith(this: WebdriverIO.Element, options?: ClickWith) {
  if (options?.move) {
    await this.moveIntoView(options.move);
  }

  switch (options?.button) {
    case ClickAction.SCRIPT: {
      await browser.execute(JS_MOUSE_CLICK, this);
      break;
    }
    case ClickAction.DOUBLE: {
      await this.doubleClick();
      break;
    }
    case null: {
      await this.click({ ...options, button: ClickAction.LEFT });
      break;
    }
    default: {
      await this.click(options);
      break;
    }
  }
}
