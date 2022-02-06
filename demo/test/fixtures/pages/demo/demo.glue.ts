import { ClickAction } from "@hornet";
import { DemoPage } from "./demo.page";

const demoPage = new DemoPage();

export async function whenClickNavItem(label: string) {
  const element = await demoPage.navigationBar.getNavigationItem(label);
  await element.clickWith({ button: ClickAction.SCRIPT })
}

export async function thenNavItemSelected(label: string, not: string) {
  const element = await demoPage.navigationBar.getNavigationItem(label);
  const then = not ? expect(element).not : expect(element);

  await then.elementAttributeToBeEqual("class", "active")
}

export async function thenSectionHeaderExisting(label: string, not: string) {
  const element = await demoPage.getSectionHeader(label).$;
  const then = not ? expect(element).not : expect(element);

  await then.elementToBeExisting();
}
