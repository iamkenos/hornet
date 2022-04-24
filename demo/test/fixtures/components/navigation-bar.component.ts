import { WebComponent, XPathBuilder } from "@iamkenos/hornet";
import meta, { TAG } from "./navigation-bar.meta";
export class NavigationBar extends WebComponent<typeof meta> {
  constructor() {
    super(TAG, meta);
  }

  public getNavigationItem(label: string) {
    const selector = this.selector + this.selectors["nav-items"];
    return new XPathBuilder(selector).descendant().textEquals(label).toWebElement();
  }
}
