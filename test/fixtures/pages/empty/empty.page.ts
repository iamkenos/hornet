import { WebPage } from "@iamkenos/hornet/generics";
import meta from "./empty.meta";

export class EmptyPage extends WebPage<any> {
  constructor() {
    super(meta);
  }
}
