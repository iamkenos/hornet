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
  [key: string]: Partial<PageProperties>;
};

export type ComponentMetaData = {
  default: ComponentProperties;
  [key: string]: ComponentProperties;
};

