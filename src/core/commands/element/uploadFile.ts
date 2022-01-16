import { filesFromGlob } from "@core/common";

export async function uploadFile(this: WebdriverIO.Element, filepath: string) {
  await this.setValue(filesFromGlob([filepath], browser.config.directory));
}
