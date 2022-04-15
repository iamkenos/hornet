import { WebComponent, WebElement } from "@hornet";
import meta, { TAG } from "./navigation-bar.meta";
export class NavigationBar extends WebComponent<typeof meta> {
  constructor() {
    super(TAG, meta);
  }

  public async getNavigationItem(label: string) {
    const selector = this.selector + this.selectors["nav-items"];
    return await new WebElement(selector).byText(label);
  }
}
