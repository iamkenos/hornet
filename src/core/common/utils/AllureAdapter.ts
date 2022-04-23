import reporter from "@wdio/allure-reporter";
import cli from "allure-commandline";
import fs from "fs-extra";
import { BufferEncoding, MimeType } from "./enums";
import { isJSON } from "./parsing";

export abstract class AllureAdapter {
  public static async cli(args: string[]) {
    await cli(args);
  }

  public static attachFile(title: string, filename: string, attachment: any, mimetype: string) {
    reporter.addAttachment(`${title}: ${filename}`, attachment, mimetype);
  }

  public static attachImage(title: string, filename: string) {
    if (fs.existsSync(filename)) {
      const content = Buffer.from(fs.readFileSync(filename, BufferEncoding.BASE64));
      this.attachFile(title, filename, content, MimeType.IMG_PNG);
    }
  }

  public static attachJson(title: string, filename: string) {
    if (fs.existsSync(filename)) {
      const content = fs.readFileSync(filename, BufferEncoding.UTF8);
      this.attachFile(title, filename, isJSON(content) ? JSON.parse(content) : content, MimeType.APP_JSON);
    }
  }
}
