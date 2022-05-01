import "tsconfig-paths/register";
import { configure } from "@iamkenos/hornet/config";

export const config = configure({
  baseUrl: "http://localhost:8080/",
  specs: ["features/**/*.feature"],
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
  snapshots: {
    images: {
      saveAboveTolerance: 0.15,
      disableCSSAnimation: true,
      hideScrollBars: true
    }
  }
});
