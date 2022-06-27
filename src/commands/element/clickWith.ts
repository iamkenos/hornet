import { ClickAction, ClickWith, JS_MOUSE_CLICK } from "@commands";
import { WebElement } from "@generics/WebElement";

export async function clickWith(this: WebdriverIO.Element, options?: ClickWith) {
  const conditions = await new WebElement(this.selector).conditions();
  const clickable = conditions.clickable();

  if (options?.move) {
    await this.moveIntoView(options.move as any);
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
      await clickable.evaluate();
      await this.click({ ...options, button: ClickAction.LEFT });
      break;
    }
    default: {
      await clickable.evaluate();
      await this.click(options);
      break;
    }
  }

  if (options?.delay) {
    await browser.pause(options.delay);
  }
}
