import { WebPage } from "@generics";
import meta from "./demo.meta";

export class DemoPage extends WebPage<typeof meta> {
  constructor() {
    super(meta);
  }
}
