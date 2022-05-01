import reporter from "@wdio/allure-reporter";
import cli from "allure-commandline";
import fs from "fs-extra";

import * as string from "./string";
import { BufferEncoding, MimeType } from "./enums";

export abstract class AllureAdapter {
  public static async cli(args: string[]) {
    await cli(args);
  }

  public static reporter() {
    return reporter;
  }

  public static attachFile(title: string, filename: string, attachment: any, mimetype: string) {
    reporter.addAttachment(`${title}: ${filename}`, attachment, mimetype);
  }

  public static attachImage(title: string, filename: string) {
    if (fs.existsSync(filename)) {
      const content = Buffer.from(fs.readFileSync(filename) as any, BufferEncoding.BASE64);
      this.attachFile(title, filename, content, MimeType.IMG_PNG);
    }
  }

  public static attachJson(title: string, filename: string) {
    if (fs.existsSync(filename)) {
      const content = fs.readFileSync(filename, BufferEncoding.UTF8);
      this.attachFile(title, filename, string.isJSON(content) ? JSON.parse(content) : content, MimeType.APP_JSON);
    }
  }
}
