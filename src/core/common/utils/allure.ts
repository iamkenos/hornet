import allure from "@wdio/allure-reporter";
import fs from "fs-extra";
import { MimeType } from "./enums";
import { readFileSync } from "./files";
import { isJson } from "./objects";

function bufferedImage(filename: string) {
  return Buffer.from(fs.readFileSync(filename) as any, "base64");
}

export function attachFile(title: string, filename: string, attachment: any, mimetype: string) {
  allure.addAttachment(`${title}: ${filename}`, attachment, mimetype);
}

export function attachImage(title: string, filename: string) {
  if (fs.existsSync(filename)) {
    const content = Buffer.from(fs.readFileSync(filename) as any, "base64");
    attachFile(title, filename, content, MimeType.IMG_PNG)
  } 
}

export function attachJson(title: string, filename: string) {
  if (fs.existsSync(filename)) {
    const content = readFileSync(filename);
    attachFile(title, filename, isJson(content) ? JSON.parse(content) : content, MimeType.APP_JSON)
  } 
}
