import type { DataTable } from "@cucumber/cucumber";
import {
  AnchorAttributes,
  Axis,
  ClickAction,
  Count,
  ElementType,
  HrefScheme,
  HrefSchemeContext,
  HrefTarget,
  HrefTargetContext,
  SelectAction,
  SelectOptionContext,
  SetValueAction,
  SizeContext
} from "@core/commands";
import { isURL } from "@core/common";
import { getLabel, getSelector, getUrl, WebElement } from "@core/generics";
import { BY_LINK_TEXT, getDataTableRows, parseToken } from "@core/gherkin";

export async function whenClear(meta: string, key: string) {
  const selector = getSelector(meta, key);
  const element = await new WebElement(selector).$;

  await element.clearValue();
}

export async function whenClick(button: ClickAction, meta: string, key: string, type: string) {
  const selector = getSelector(meta, key);
  const element = await new WebElement(type === ElementType.LINK ? BY_LINK_TEXT(key) : selector).$;

  await element.clickWith({ button });
}

export async function whenDrag(meta: string, sourceKey: string, targetKey: string) {
  const sourceSelector = getSelector(meta, sourceKey);
  const targetSelector = getSelector(meta, targetKey);
  const source = await new WebElement(sourceSelector).$;
  const target = await new WebElement(targetSelector).$;

  await source.dragAndDrop(target);
}

export async function whenFileUpload(filepath: string, meta: string, key: string) {
  const selector = getSelector(meta, key);
  const element = await new WebElement(selector).$;

  await element.uploadFile(filepath);
}

export async function whenFocus(meta: string, key: string) {
  const selector = getSelector(meta, key);
  const element = await new WebElement(selector).$;

  await element.focus();
}

export async function whenMoveTo(meta: string, key: string, x: number, y: number) {
  const selector = getSelector(meta, key);
  const element = await new WebElement(selector).$;
  const xOffset = x || undefined;
  const yOffset = y || undefined;

  await element.moveIntoView({ xOffset, yOffset });
}

export async function whenScrollTo(meta: string, key: string) {
  const selector = getSelector(meta, key);
  const element = await new WebElement(selector).$;

  await element.moveIntoView({ xOffset: 0, yOffset: 0 });
}

export async function whenSelectDropdownOption(context: SelectOptionContext, value: string, meta: string, key: string) {
  const parsed = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const element = await new WebElement(selector).$;

  switch (context) {
    case SelectOptionContext.INDEX: {
      await element.selectByIndex(parseInt(parsed));
      break;
    }
    case SelectOptionContext.LABEL: {
      await element.selectByVisibleText(parsed);
      break;
    }
    default: {
      await element.selectByAttribute(SelectOptionContext.VALUE, parsed);
      break;
    }
  }
}

export async function whenSetValue(action: SetValueAction, value: string, meta: string, key: string) {
  const parsed = parseToken(value);
  const selector = getSelector(meta, key);
  const element = await new WebElement(selector).$;

  switch (action) {
    case SetValueAction.APPEND: {
      await element.addValue(parsed);
      break;
    }
    default: {
      await element.setValue(parsed);
      break;
    }
  }
}

export async function whenSetValueMultiLine(action: SetValueAction, meta: string, key: string, value: string) {
  await whenSetValue(action, value, meta, key);
}

export async function whenSetValues(action: SetValueAction, meta: string, key: string, table: DataTable) {
  const labels = getDataTableRows(table, 1);
  const values = getDataTableRows(table, 2);

  for (let i = 0; i < labels.length; i++) {
    await whenSetValue(action, values[i], meta, key);
  }
}

export async function whenToggle(action: SelectAction, meta: string, key: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const conditions = await webelement.conditions();

  await element.clickUntil(conditions.selected(action === SelectAction.DESELECT), { move: { xOffset: 0, yOffset: 0 } });
}

export async function thenAttributeContains(meta: string, key: string, attribute: string, not: boolean, value: string) {
  const parsed = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.attributeContains(attribute, parsed, not).expect();
}

export async function thenAttributeEquals(meta: string, key: string, attribute: string, not: boolean, value: string) {
  const parsed = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.attributeEquals(attribute, parsed, not).expect();
}

export async function thenAttributeExists(meta: string, key: string, attribute: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.attributeExists(attribute, not).expect();
}

export async function thenAxisLocationEquals(meta: string, key: string, axis: Axis, not: boolean, value: string) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.axisLocationEquals(axis, parseFloat(value), not).expect();
}

export async function thenCountEquals(meta: string, key: string, not: boolean, value: number) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.countEquals(value, not).expect();
}

export async function thenCountLessOrMore(meta: string, key: string, not: boolean, count: Count, value: number) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  switch (count) {
    case Count.LESS: {
      await then.countLessThan(value, not).expect();
      break;
    }
    default: {
      await then.countMoreThan(value, not).expect();
      break;
    }
  }
}

export async function thenCssPropertyExists(meta: string, key: string, property: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.cssPropertyExists(property, not).expect();
}

export async function thenDisplayed(meta: string, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.displayed(not).expect();
}

export async function thenDisplayedInViewport(meta: string, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.displayedInViewport(not).expect();
}

export async function thenEnabled(meta: string, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.enabled(not).expect();
}

export async function thenExists(meta: string, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.exists(not).expect();
}

export async function thenFocused(meta: string, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.focused(not).expect();
}

export async function thenHrefOpensOn(meta: string, key: string, type: ElementType, not: boolean, target: HrefTargetContext) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(type === ElementType.LINK ? BY_LINK_TEXT(key) : selector).conditions();

  switch (target) {
    case HrefTargetContext.BLANK:
    case HrefTargetContext.SELF:
    case HrefTargetContext.PARENT:
    case HrefTargetContext.TOP: {
      const member = Object.entries(HrefTargetContext).find(([, value]) => value === target)[0];
      await then.attributeEquals(AnchorAttributes.TARGET, HrefTarget[member], not).expect();
      break;
    }
    default: {
      await then.attributeExists(AnchorAttributes.TARGET, !not).expect();
      break;
    }
  }
}

export async function thenHrefOpensOnNamedFrame(meta: string, key: string, type: ElementType, not: boolean, target: string) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(type === ElementType.LINK ? BY_LINK_TEXT(key) : selector).conditions();

  await then.attributeEquals(AnchorAttributes.TARGET, target, not).expect();
}

export async function thenHrefPointsTo(meta: string, key: string, type: ElementType, not: boolean, scheme: HrefSchemeContext, value: string) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(type === ElementType.LINK ? BY_LINK_TEXT(key) : selector).conditions();

  switch (scheme) {
    case HrefSchemeContext.MAIL:
    case HrefSchemeContext.TEL: {
      const member = Object.entries(HrefSchemeContext).find(([, value]) => value === scheme)[0];
      await then.attributeEquals(AnchorAttributes.HREF, `${HrefScheme[member]}${value}`, not).expect();
      break;
    }
    default: {
      await then.attributeEquals(AnchorAttributes.HREF, value, not).expect();
      break;
    }
  }
}

export async function thenHrefPointsToPage(meta: string, key: string, type: ElementType, not: boolean, page: string) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(type === ElementType.LINK ? BY_LINK_TEXT(key) : selector).conditions();
  const target = getUrl(page);
  const value = isURL(target) ? target : new URL(browser.config.baseUrl + target).href;

  await then.attributeEquals(AnchorAttributes.HREF, new URL(value).pathname, not).expect();
}

export async function thenSnapshotMatch(meta: string, key: string, not: boolean, filename: string) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.snapshotMatch(filename, undefined, not).expect();
}

export async function thenOptionSelected(option: string, context: SelectOptionContext, value: string, meta: string, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const webelement = await new WebElement(selector).byAbsoluteXpath(option);
  const webelements = await webelement.all;
  let element: WebdriverIO.Element;

  switch (context) {
    case SelectOptionContext.INDEX: {
      element = await webelements[parseInt(value)].$;
      break;
    }
    case SelectOptionContext.LABEL: {
      const match = await webelement.byText(value);
      element = await match.$;
      break;
    }
    default: {
      const match = await webelement.byAttribute({ key: SelectOptionContext.VALUE, value });
      element = await match.$;
      break;
    }
  }
  const then = await new WebElement(element.selector).conditions();
  await then.selected(not).expect();
}

export async function thenTextArrayContains(meta: string, key: string, not: boolean, values: DataTable) {
  const selector = getSelector(meta, key);
  const actual = await new WebElement(selector).toTextArray();
  const expected = [].concat(...values.rows());
  const then = await browser.conditions();

  await then.arrayContains(actual, expected, not).expect();
}

export async function thenTextArrayEquals(meta: string, key: string, not: boolean, values: DataTable) {
  const selector = getSelector(meta, key);
  const actual = await new WebElement(selector).toTextArray();
  const expected = [].concat(...values.rows());
  const then = await browser.conditions();

  await then.arrayEquals(actual, expected, not).expect();
}

export async function thenSelected(meta: string, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.selected(not).expect();
}

export async function thenSizeEquals(meta: string, key: string, not: boolean, width: number, height: number) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.sizeEquals(width, height, not).expect();
}

export async function thenSizeSideEquals(meta: string, key: string, not: boolean, size: number, side: SizeContext) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.sizeSideEquals(side, size, not).expect();
}

export async function thenTextContains(meta: string, key: string, not: boolean, value: string) {
  const parsed = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.textContains(parsed, not).expect();
}

export async function thenTextEmpty(meta: string, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.textEquals("", not).expect();
}

export async function thenTextEquals(meta: string, key: string, not: boolean, value: string) {
  const parsed = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.textEquals(parsed, not).expect();
}

export async function thenValueContains(meta: string, key: string, not: boolean, value: string) {
  const parsed = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.valueContains(parsed, not).expect();
}

export async function thenValueEmpty(meta: string, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.valueEquals("", not).expect();
}

export async function thenValueEquals(meta: string, key: string, not: boolean, value: string) {
  const parsed = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions();

  await then.valueEquals(parsed, not).expect();
}
