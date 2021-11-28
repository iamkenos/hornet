export class WebElement {
  public readonly parent: string;
  public selector: string;

  public constructor(selector: string) {
    this.selector = selector;
    this.parent = "";
  }

  public async $() {
    return await $(this.selector);
  }

  public async $$() {
    return await $$(this.selector);
  }
}
