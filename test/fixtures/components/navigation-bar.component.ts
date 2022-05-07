import { WebComponent } from "@generics";
import meta, { TAG } from "./navigation-bar.meta";

export class NavigationBar extends WebComponent<typeof meta> {
  constructor(parent?: string, locale?: keyof typeof meta) {
    super(TAG, meta, parent, locale);
  }
}
