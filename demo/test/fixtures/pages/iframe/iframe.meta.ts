import { PageMetadata } from "@iamkenos/hornet";

const meta: PageMetadata = {
  default: {
    url: "/iframe.html",
    title: "Demo Iframe",
    selectors: {
      tabs: "//ul//li[@class='tab']"
    }
  }
};

export default meta;
