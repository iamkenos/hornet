import type { PageMetaData } from "@hornet";

const meta: PageMetaData = {
  default: {
    url: "/iframe.html",
    title: "Demo Iframe",
    selectors: {
      tabs: "//ul//li[@class='tab']"
    }
  }
};

export default meta;
