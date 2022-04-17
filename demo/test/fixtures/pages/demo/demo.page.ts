import { WebElement, WebPage } from "@hornet";
import { NavigationBar } from "../../components/navigation-bar.component";
import meta from "./demo.meta";

export class DemoPage extends WebPage<typeof meta> {
  public navigationBar: NavigationBar;

  constructor() {
    super(meta);
    this.navigationBar = new NavigationBar();
  }

  public async getSectionHeader(label: string) {
    return new WebElement(this.selectors["section-header"].replace("##LABEL##", label));
  }
}
