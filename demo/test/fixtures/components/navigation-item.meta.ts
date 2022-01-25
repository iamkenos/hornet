export const TAG = "navigation-items";
export default {
  default: {
    selectors: {
      [TAG]: `//${TAG}`,
      "navigation-links": "//ul[@id='nav-items']//a[contains(text(),'##LABEL##')]"
    }
  }
};
