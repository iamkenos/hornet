import { WebComponent, getMergedMetaData } from "@hornet";
import navBar, { TAG } from "./navigation-bar.meta";
import navItem from "./navigation-item.meta";
import navTitle from "./navigation-title.meta";

const meta = getMergedMetaData(navBar, navItem, navTitle);

export class NavigationBar extends WebComponent<typeof meta> {
  constructor() {
    super(TAG, meta);
  }

  public async getNavigationItem(label: string) {
    const selector = this.selectors["navigation-items"] + this.selectors["navigation-links"].replace("##LABEL##", label);
    return await this.$.$(selector);
  }
}
