import "tsconfig-paths/register";
import { merge } from "lodash";
import { base, Config, ConfigArgs } from "@hornet";

const args: ConfigArgs = {
  directory: __dirname,
  hooks: {
    beforeFeature: async () => {
      await browser.storeWindowSize();
    },
    afterScenario: async () => {
      await browser.clean();
    }
  }
};

export const config = merge<Config, Config>(base(args), {
  specs: ['demo/**/features/**/*.feature']
});
