import { ClickAction } from "@hornet";
import { DemoPage } from "./demo.page";
const demoPage = new DemoPage();

export async function whenClickNavItem(label: string) {
  const webelement = demoPage.navigationBar.getNavigationItem(label);
  const element = await webelement.$();

  await element.clickWith({ button: ClickAction.SCRIPT });
}

export async function thenNavItemSelected(label: string, not: boolean) {
  const webelement = demoPage.navigationBar.getNavigationItem(label);
  const then = await webelement.conditions();

  await then.attributeEquals("class", "active", not).expect();
}

export async function thenSectionHeaderExists(label: string, not: boolean) {
  const webelement = demoPage.getSectionHeader(label);
  const then = await webelement.conditions();

  await then.exists(not).expect();
}
