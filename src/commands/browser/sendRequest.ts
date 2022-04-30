import type { HttpRequestOptions, HttpResponse } from "@commands";

import got from "got";
import { isURL } from "@common";

export async function sendRequest(url: string, options?: HttpRequestOptions, delay?: { pre: number; post: number }) {
  url = isURL(url) ? url : new URL(url, browser.config.baseUrl).href;
  
  await new Promise((resolve) => setTimeout(resolve, delay?.pre || 0));
  const start = process.hrtime.bigint();
  const response = await got(url, { throwHttpErrors: false, ...options, url: undefined }) as HttpResponse;
  response.time = Number(process.hrtime.bigint() - start) / 1000000;
  response.request.body = options?.body;
  await new Promise((resolve) => setTimeout(resolve, delay?.post || 0));

  return response;
}
