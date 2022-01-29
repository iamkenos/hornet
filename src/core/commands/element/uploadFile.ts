import path from "path";

export async function uploadFile(this: WebdriverIO.Element, filepath: string) {
  await this.setValue(path.join(browser.config.baseDir, filepath));
}
