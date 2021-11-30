import got from "got";
import type { HttpRequestOptions, HttpResponse }  from "@core/commands/types";

export default async function (url: string, options?: HttpRequestOptions, delay?: { pre: number; post: number }) {
  const opts = { throwHttpErrors: false, ...options };
  let response: HttpResponse;

  await new Promise((resolve) => setTimeout(resolve, delay.pre));
  const start = process.hrtime.bigint();
  response = await got(url, opts) as HttpResponse;
  response.time = Number(process.hrtime.bigint() - start) / 1000000;
  response.request.body = options?.body;
  await new Promise((resolve) => setTimeout(resolve, delay.post));

  return response;
};
