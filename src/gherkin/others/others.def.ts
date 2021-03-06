import { Before, When } from "@cucumber/cucumber";

import { RETRY } from "@gherkin";
import * as fn from "./others.glue";

/** @see: [Show skipped tests in the reporter](https://github.com/webdriverio/webdriverio/issues/7327#issuecomment-905285512) */
Before({ tags: "@SKIP" }, () => "skipped");

Before({ tags: "@PENDING" }, () => "pending");

When(
  /^I (land on|start using|stop using) the "([^"]*)?" (page|component|widget)$/, RETRY(),
  fn.whenSetActiveMetadata
);

When(
  /^I (start using|stop using) the (?:page|component|widget)'s "([^"]*)?" element$/, RETRY(),
  fn.whenSetActiveSelector
);
