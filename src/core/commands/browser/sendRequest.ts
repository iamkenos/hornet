import got, { OptionsOfTextResponseBody, Response as R } from "got";

export type Response = R<string> & {
  /** The time in ms taken to get the response */
  time: number;
  /** The request object */
  request: R["request"] & { body?: any };
};

export default async function (url: string, options?: OptionsOfTextResponseBody, delay?: { pre: number; post: number }) {
  const opts = { throwHttpErrors: false, ...options };
  let response: Response;

  await new Promise((resolve) => setTimeout(resolve, delay.pre));
  const start = process.hrtime.bigint();
  response = (await got(url, opts)) as any;
  response.time = Number(process.hrtime.bigint() - start) / 1000000;
  response.request.body = options?.body;
  await new Promise((resolve) => setTimeout(resolve, delay.post));

  return response;
};
