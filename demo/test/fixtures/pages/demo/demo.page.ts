import { WebPage, XPathBuilder } from "@hornet/core/generics";
import { NavigationBar } from "../../components/navigation-bar.component";
import meta from "./demo.meta";

export class DemoPage extends WebPage<typeof meta> {
  public navigationBar: NavigationBar;

  constructor() {
    super(meta);
    this.navigationBar = new NavigationBar();
  }

  public getSectionHeader(label: string) {
    const selector = this.selectors["section-header"];
    return new XPathBuilder(selector).textEquals(label).toWebElement();
  }
}
