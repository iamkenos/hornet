import type { PageMetaData } from "@hornet";

const meta: PageMetaData = {
  default: {
    url: "http://localhost:8080/iframe.html",
    title: "Demo iFrame",
    selectors: {
      "Level 1 List Items": "//ol[@id='orderList']/li",
      "Level 2 List Items": "//ol[@id='orderList']/ol/li"
    }
  }
};

export default meta;
