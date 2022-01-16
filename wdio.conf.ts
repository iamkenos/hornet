import "tsconfig-paths/register";

import { merge } from "lodash";
import { base } from "src";

export const config: WebdriverIO.Config = merge({}, base, {
  cucumberOpts: {
    require: ["./features/step-definitions/steps.ts"]
  }
});
