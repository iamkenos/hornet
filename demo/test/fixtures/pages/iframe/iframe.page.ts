import { DemoPage } from "../demo.page";
import meta from "./iframe.meta";

// sample class showing how to do main page inheritance with type inference
export class Iframe extends DemoPage<typeof meta> {
  constructor() {
    super(meta);
  }
}
