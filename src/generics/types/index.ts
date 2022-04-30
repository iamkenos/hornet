type MetaProperties = {
  selectors: { [key: string]: string };
  [key: string]: any;
};

export type PageProperties = MetaProperties & {
  url: string;
  title: string;
  labels?: { [key: string]: string };
};

export type ComponentProperties = MetaProperties;

export type PageMetadata = {
  default: PageProperties;
  [key: string]: Partial<PageProperties>;
};

export type ComponentMetadata = {
  default: ComponentProperties;
  [key: string]: ComponentProperties;
};

