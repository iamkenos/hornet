import { PageMetadata } from "@iamkenos/hornet/generics";

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
