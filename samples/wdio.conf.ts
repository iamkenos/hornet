import "tsconfig-paths/register";

import { merge } from "lodash";
import { base, Config, ConfigArgs } from "@hornet";

const args: ConfigArgs = { directory: __dirname };
export const config = merge<Config, Config>(base(args), {
 specs: ['samples/**/features/**/*.feature']
});