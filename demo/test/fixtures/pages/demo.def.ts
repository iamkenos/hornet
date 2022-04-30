import { Then, When } from "@cucumber/cucumber";
import { RETRY } from "@iamkenos/hornet";
import * as fn from "./demo.glue";

When(
  /^I click the "([^"]*)?" navigation item$/, RETRY(),
  fn.whenClickNavItem
);

Then(
  /^I expect the navigation item "([^"]*)?" to( not)? be selected$/, RETRY(),
  fn.thenNavItemSelected
);

Then(
  /^I expect the section header "([^"]*)?" to( not)? (?:be existing|exist)$/, RETRY(),
  fn.thenSectionHeaderExists
);
