import merge from "lodash/merge";
import { PageMetadata, WebPage, XPathBuilder } from "@iamkenos/hornet";
import { NavigationBar } from "../components/navigation-bar.component";
import meta from "./demo.meta";

export class DemoPage<T extends PageMetadata> extends WebPage<T & typeof meta> {
  public navigationBar: NavigationBar;

  constructor(m?: T) {
    super(merge(meta, m));
    this.navigationBar = new NavigationBar();
  }

  public getSectionHeader(label: string) {
    const selector = this.selectors["section-header"];
    return new XPathBuilder(selector).textEquals(label).toWebElement();
  }
}
