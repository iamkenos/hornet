import "tsconfig-paths/register";
import { merge } from "lodash";
import { base, Config, ConfigArgs } from "@hornet";

const args: ConfigArgs = {
  baseDir: __dirname,
  snapshots: {
    images: {
      saveAboveTolerance: 0.25,
      disableCSSAnimation: true,
      hideScrollBars: true
    }
  },
  hooks: {
    beforeScenario: async () => {
      await browser.storeWindowSize();
    },
    afterScenario: async () => {
      await browser.restoreWindowSize();
      await browser.clean();
    }
  }
};

export const config = merge<Config, Config>(base(args), {
  specs: ['demo/**/features/**/*.feature'],
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
      unhandledPromptBehavior: "ignore",
      "goog:chromeOptions": {
        args: [
          "--disable-gpu",
          "--disable-web-security",
          "--window-size=1920,1200",
          "--headless",
          "--allow-insecure-localhost",
          "--enable-speech-dispatcher",
          "--incognito"
        ],
        binary: process.env.CHROMIUM_BIN
      }
    }
  ],
});
