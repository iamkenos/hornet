type GenericsProperties = {
  selectors: { [key: string]: string };
  [key: string]: any;
};

export type PageProperties = GenericsProperties & {
  url: string;
  title: string;
  labels?: { [key: string]: string };
};

export type ComponentProperties = GenericsProperties;

export type PageMetaData = {
  default: PageProperties;
  [locale: string]: Partial<PageProperties>;
};

export type ComponentMetaData = {
  default: ComponentProperties;
  [locale: string]: ComponentProperties;
};

export type DeepPartial<T extends any> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type Intersect<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
