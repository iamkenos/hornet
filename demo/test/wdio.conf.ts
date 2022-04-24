import "tsconfig-paths/register";
import merge from "lodash/merge";
import { base, Config, ConfigArgs } from "@iamkenos/hornet";

const args: ConfigArgs = {
  baseDir: __dirname,
  snapshots: {
    images: {
      saveAboveTolerance: 0.15,
      disableCSSAnimation: true,
      hideScrollBars: true,
    },
  }
};

export const config = merge<Config, Config>(base(args), {
  specs: ['demo/**/features/**/*.feature'],
  capabilities: [
    {
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
