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
import { getLabel, getSelector, getUrl, WebElement, XPathBuilder } from "@core/generics";
import { BY_LINK_TEXT, getDataTableRows, parseToken } from "@core/gherkin";

export async function whenClear(meta: string, index: number, key: string) {
  const selector = getSelector(meta, key);
  const element = await new WebElement(selector).$(index - 1);

  await element.clearValue();
}

export async function whenClick(button: ClickAction, meta: string, index: number, key: string, type: string) {
  const selector = getSelector(meta, key);
  const element = await new WebElement(type === ElementType.LINK ? BY_LINK_TEXT(key) : selector).$(index - 1);

  await element.clickWith({ button });
}

export async function whenDrag(meta: string, sourceIndex: number, sourceKey: string, targetIndex: number, targetKey: string) {
  const sourceSelector = getSelector(meta, sourceKey);
  const targetSelector = getSelector(meta, targetKey);
  const source = await new WebElement(sourceSelector).$(sourceIndex - 1);
  const target = await new WebElement(targetSelector).$(targetIndex - 1);

  await source.dragAndDrop(target);
}

export async function whenFileUpload(filepath: string, meta: string, index: number, key: string) {
  const selector = getSelector(meta, key);
  const element = await new WebElement(selector).$(index - 1);

  await element.uploadFile(filepath);
}

export async function whenFocus(meta: string, index: number, key: string) {
  const selector = getSelector(meta, key);
  const element = await new WebElement(selector).$(index - 1);

  await element.focus();
}

export async function whenMoveTo(meta: string, index: number, key: string, x: number, y: number) {
  const selector = getSelector(meta, key);
  const element = await new WebElement(selector).$(index - 1);
  const xOffset = x || undefined;
  const yOffset = y || undefined;

  await element.moveIntoView({ xOffset, yOffset });
}

export async function whenScrollTo(meta: string, index: number, key: string) {
  const selector = getSelector(meta, key);
  const element = await new WebElement(selector).$(index - 1);

  await element.moveIntoView({ xOffset: 0, yOffset: 0 });
}

export async function whenSelectDropdownOption(optIndex: number, context: SelectOptionContext, value: string, meta: string, ddlIndex: number, key: string) {
  const parsed = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const element = await new WebElement(selector).$(ddlIndex - 1);

  switch (context) {
    case SelectOptionContext.LABEL: {
      await element.selectByVisibleText(parsed);
      break;
    }
    case SelectOptionContext.VALUE: {
      await element.selectByAttribute(SelectOptionContext.VALUE, parsed);
      break;
    }
    default: {
      await element.selectByIndex(optIndex - 1);
      break;
    }
  }
}

export async function whenSetValue(action: SetValueAction, value: string, meta: string, index: number, key: string) {
  const parsed = parseToken(value);
  const selector = getSelector(meta, key);
  const element = await new WebElement(selector).$(index - 1);

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

export async function whenSetValueMultiLine(action: SetValueAction, meta: string, index: number, key: string, value: string) {
  await whenSetValue(action, value, meta, index, key);
}

export async function whenSetValues(action: SetValueAction, meta: string, key: string, table: DataTable) {
  const labels = getDataTableRows(table, 1);
  const values = getDataTableRows(table, 2);
  const indices = getDataTableRows(table, 3) || Array(labels.length).fill(0);

  for (let i = 0; i < labels.length; i++) {
    await whenSetValue(action, values[i], meta, indices[i], key);
  }
}

export async function whenToggle(action: SelectAction, meta: string, index: number, key: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$(index - 1);
  const conditions = await webelement.conditions(index - 1);

  await element.clickUntil(conditions.selected(action === SelectAction.DESELECT), { move: { xOffset: 0, yOffset: 0 } });
}

export async function thenAttributeContains(meta: string, index: number, key: string, attribute: string, not: boolean, value: string) {
  const parsed = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.attributeContains(attribute, parsed, not).expect();
}

export async function thenAttributeEquals(meta: string, index: number, key: string, attribute: string, not: boolean, value: string) {
  const parsed = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.attributeEquals(attribute, parsed, not).expect();
}

export async function thenAttributeExists(meta: string, index: number, key: string, attribute: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.attributeExists(attribute, not).expect();
}

export async function thenAxisLocationEquals(meta: string, index: number, key: string, axis: Axis, not: boolean, value: string) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.axisLocationEquals(axis, parseFloat(value), not).expect();
}

export async function thenCountEquals(meta: string, index: number, key: string, not: boolean, value: number) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.countEquals(value, not).expect();
}

export async function thenCountLessOrMore(meta: string, index: number, key: string, not: boolean, count: Count, value: number) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

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

export async function thenCssPropertyExists(meta: string, index: number, key: string, property: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.cssPropertyExists(property, not).expect();
}

export async function thenDisplayed(meta: string, index: number, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.displayed(not).expect();
}

export async function thenDisplayedInViewport(meta: string, index: number, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.displayedInViewport(not).expect();
}

export async function thenEnabled(meta: string, index: number, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.enabled(not).expect();
}

export async function thenExists(meta: string, index: number, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.exists(not).expect();
}

export async function thenFocused(meta: string, index: number, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.focused(not).expect();
}

export async function thenHrefOpensOn(meta: string, index: number, key: string, type: ElementType, not: boolean, target: HrefTargetContext) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(type === ElementType.LINK ? BY_LINK_TEXT(key) : selector).conditions(index - 1);

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

export async function thenHrefOpensOnNamedFrame(meta: string, index: number, key: string, type: ElementType, not: boolean, target: string) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(type === ElementType.LINK ? BY_LINK_TEXT(key) : selector).conditions(index - 1);

  await then.attributeEquals(AnchorAttributes.TARGET, target, not).expect();
}

export async function thenHrefPointsTo(meta: string, index: number, key: string, type: ElementType, not: boolean, scheme: HrefSchemeContext, value: string) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(type === ElementType.LINK ? BY_LINK_TEXT(key) : selector).conditions(index - 1);

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

export async function thenHrefPointsToPage(meta: string, index: number, key: string, type: ElementType, not: boolean, page: string) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(type === ElementType.LINK ? BY_LINK_TEXT(key) : selector).conditions(index - 1);
  const target = getUrl(page);
  const value = isURL(target) ? target : new URL(browser.config.baseUrl + target).href;

  await then.attributeEquals(AnchorAttributes.HREF, new URL(value).pathname, not).expect();
}

export async function thenSnapshotMatch(meta: string, index: number, key: string, not: boolean, filename: string) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.snapshotMatch(filename, undefined, not).expect();
}

export async function thenOptionSelected(optIndex: number, opt: string, context: SelectOptionContext, value: string, meta: string, ddlIndex: number, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const dropdown = await new WebElement(selector).byAbsoluteXPath(ddlIndex - 1);
  const option = new XPathBuilder(dropdown.selector).descendant(opt);
  let element: WebdriverIO.Element;

  switch (context) {
    case SelectOptionContext.LABEL: {
      element = await option
        .descendantOrSelf()
        .textEquals(parseToken(getLabel(meta, value)))
        .toWebElement()
        .$();
      break;
    }
    case SelectOptionContext.VALUE: {
      element = await option
        .descendantOrSelf()
        .attributeEquals(SelectOptionContext.VALUE, parseToken(getLabel(meta, value)))
        .toWebElement()
        .$();
      break;
    }
    default: {
      element = await option.toWebElement().$();
      break;
    }
  }

  const then = await new WebElement(element.selector).conditions(optIndex - 1);
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

export async function thenSelected(meta: string, index: number, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.selected(not).expect();
}

export async function thenSizeEquals(meta: string, index: number, key: string, not: boolean, width: number, height: number) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.sizeEquals(width, height, not).expect();
}

export async function thenSizeSideEquals(meta: string, index: number, key: string, not: boolean, size: number, side: SizeContext) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.sizeSideEquals(side, size, not).expect();
}

export async function thenTextContains(meta: string, index: number, key: string, not: boolean, value: string) {
  const parsed = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.textContains(parsed, not).expect();
}

export async function thenTextEmpty(meta: string, index: number, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.textEquals("", not).expect();
}

export async function thenTextEquals(meta: string, index: number, key: string, not: boolean, value: string) {
  const parsed = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.textEquals(parsed, not).expect();
}

export async function thenValueContains(meta: string, index: number, key: string, not: boolean, value: string) {
  const parsed = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.valueContains(parsed, not).expect();
}

export async function thenValueEmpty(meta: string, index: number, key: string, not: boolean) {
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.valueEquals("", not).expect();
}

export async function thenValueEquals(meta: string, index: number, key: string, not: boolean, value: string) {
  const parsed = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const then = await new WebElement(selector).conditions(index - 1);

  await then.valueEquals(parsed, not).expect();
}
