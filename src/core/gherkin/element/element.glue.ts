import type { DataTable } from "@cucumber/cucumber";
import {
  AnchorAttributes,
  Axis,
  ClickAction,
  Count,
  HrefScheme,
  HrefSchemeContext,
  HrefTarget,
  HrefTargetContext,
  ElementType,
  SelectAction,
  SelectOptionContext,
  SetValueAction,
  SizeContext
} from "@core/commands";
import { isURL }  from "@core/common";
import { ExpectedConditions, Selected } from "@core/conditions";
import { WebElement, getSelector, getLabel, getUrl } from "@core/generics";
import { BY_LINK_TEXT, parseToken, getDataTableRows } from "@core/gherkin";

export async function whenClear(meta: string, key: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;

  await element.clearValue();
}

export async function whenClick(button: ClickAction, meta: string, key: string, type: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(type === ElementType.LINK ? BY_LINK_TEXT(key) : selector);
  const element = await webelement.$;

  await element.clickWith({ button });
}

export async function whenDrag(meta: string, sourceKey: string, targetKey: string) {
  const sourceSelector = getSelector(meta, sourceKey);
  const targetSelector = getSelector(meta, targetKey);
  const sourceWe = new WebElement(sourceSelector);
  const targetWe = new WebElement(targetSelector);
  const source = await sourceWe.$;
  const target = await targetWe.$;

  await source.dragAndDrop(target);
}

export async function whenFileUpload(filepath: string, meta: string, key: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;

  await element.uploadFile(filepath);
}

export async function whenFocus(meta: string, key: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;

  await element.focus();
}

export async function whenMoveTo(meta: string, key: string, x: number, y: number) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const xOffset = x || undefined;
  const yOffset = y || undefined;

  await element.moveIntoView({ xOffset, yOffset });
}

export async function whenScrollTo(meta: string, key: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;

  await element.moveIntoView({ xOffset: 0, yOffset: 0 });
}

export async function whenSelectDropdownOption(context: SelectOptionContext, value: string, meta: string, key: string) {
  value = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;

  switch (context) {
    case SelectOptionContext.INDEX: {
      await element.selectByIndex(parseInt(value));
      break;
    }
    case SelectOptionContext.LABEL: {
      await element.selectByVisibleText(value);
      break;
    }
    default: {
      await element.selectByAttribute(SelectOptionContext.VALUE, value);
      break;
    }
  }
}

export async function whenSetValue(action: SetValueAction, value: string, meta: string, key: string) {
  value = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;

  switch (action) {
    case SetValueAction.APPEND: {
      await element.addValue(value);
      break;
    }
    default: {
      await element.setValue(value);
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
  const options = { move: { xOffset: 0, yOffset: 0 } };
  const condition = new ExpectedConditions(whenToggle.name, selector).addCondition(
    new Selected(action === SelectAction.SELECT)
  );

  await element.clickUntil(condition, options);
}

export async function thenAttributeContaining(meta: string, key: string, attribute: string, not: string, value: string) {
  value = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementAttributeToBeContaining(attribute, value);
}

export async function thenAttributeEqual(meta: string, key: string, attribute: string, not: string, value: string) {
  value = parseToken(getLabel(meta, value));
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementAttributeToBeEqual(attribute, value);
}

export async function thenAttributeExisting(meta: string, key: string, attribute: string, not: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementAttributeToBeExisting(attribute);
}

export async function thenAxisLocationEqual(meta: string, key: string, axis: Axis, not: string, value: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementAxisLocationToBeEqual(axis, parseFloat(value));
}

export async function thenCountEqual(meta: string, key: string, not: string, value: number) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementCountToBeEqual(value);
}

export async function thenCountLessOrMore(meta: string, key: string, not: string, count: Count, value: number) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  switch (count) {
    case Count.LESS: {
      await then.elementCountToBeLessThan(value);
      break;
    }
    default: {
      await then.elementCountToBeMoreThan(value);
      break;
    }
  }
}

export async function thenCssPropertyExisting(meta: string, key: string, property: string, not: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementCssPropertyToBeExisting(property);
}

export async function thenDisplayed(meta: string, key: string, not: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementToBeDisplayed();
}

export async function thenDisplayedInViewport(meta: string, key: string, not: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementToBeDisplayedInViewport();
}

export async function thenEnabled(meta: string, key: string, not: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementToBeEnabled();
}

export async function thenExisting(meta: string, key: string, not: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementToBeExisting();
}

export async function thenFocused(meta: string, key: string, not: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementToBeFocused();
}

export async function thenHrefOpensOn(meta: string, key: string, type: ElementType, not: string, target: HrefTargetContext) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(type === ElementType.LINK ? BY_LINK_TEXT(key) : selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  switch (target) {
    case HrefTargetContext.BLANK:
    case HrefTargetContext.SELF:
    case HrefTargetContext.PARENT:
    case HrefTargetContext.TOP: {
      const member = Object.entries(HrefTargetContext).find(([key, value]) => value === target)[0];
      await then.elementAttributeToBeEqual(AnchorAttributes.TARGET, HrefTarget[member]);
      break;
    }
    default: {
      const reversed = not ? expect(element) : expect(element).not;
      await reversed.elementAttributeToBeExisting(AnchorAttributes.TARGET);
      break;
    }
  }
}

export async function thenHrefOpensOnNamedFrame(meta: string, key: string, type: ElementType, not: string, target: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(type === ElementType.LINK ? BY_LINK_TEXT(key) : selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementAttributeToBeEqual(AnchorAttributes.TARGET, target);
}

export async function thenHrefOpensPointsTo(meta: string, key: string, type: ElementType, not: string, scheme: HrefSchemeContext, value: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(type === ElementType.LINK ? BY_LINK_TEXT(key) : selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  switch (scheme) {
    case HrefSchemeContext.MAIL:
    case HrefSchemeContext.TEL: {
      const member = Object.entries(HrefSchemeContext).find(([key, value]) => value === scheme)[0];
      await then.elementAttributeToBeEqual(AnchorAttributes.HREF, `${HrefScheme[member]}${value}`);
      break;
    }
    default: {
      await then.elementAttributeToBeEqual(AnchorAttributes.HREF, value);
      break;
    }
  }
}

export async function thenHrefOpensPointsToPage(meta: string, key: string, type: ElementType, not: string, page: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(type === ElementType.LINK ? BY_LINK_TEXT(key) : selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);
  const target = getUrl(page);
  const value = isURL(target) ? target : new URL(browser.config.baseUrl + target).href;

  await then.elementAttributeToBeEqual(AnchorAttributes.HREF, new URL(value).pathname);
}

export async function thenSnapshotMatch(meta: string, key: string, not: string, filename: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementSnapshotToMatch(filename);
}

export async function thenOptionSelected(option: string, context: SelectOptionContext, value: string, meta: string, key: string, not: string) {
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
      const match = await webelement.byMatchingText(value);
      element = await match.$;
      break;
    }
    default: {
      const match = await webelement.byMatchingAttribute({ key: SelectOptionContext.VALUE, value });
      element = await match.$;
      break;
    }
  }

  const then = not ? expect(element).not : expect(element);
  then.elementToBeSelected();
}

export async function thenTextArrayContaining(meta: string, key: string, not: string, values: DataTable) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const actual = await webelement.toTextArray();
  const then = not ? expect(actual).not : expect(actual);

  await then.arrayToBeContaining([].concat(...values.rows()));
}

export async function thenTextArrayEqual(meta: string, key: string, not: string, values: DataTable) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const actual = await webelement.toTextArray();
  const then = not ? expect(actual).not : expect(actual);

  await then.arrayToBeEqual([].concat(...values.rows()));
}

export async function thenSelected(meta: string, key: string, not: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementToBeSelected();
}

export async function thenSizeEqual(meta: string, key: string, not: string, width: number, height: number) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementSizeToBeEqual(width, height);
}

export async function thenSizeSideEqual(meta: string, key: string, not: string, size: number, side: SizeContext) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementSizeSideToBeEqual(side, size);
}

export async function thenTextContaining(meta: string, key: string, not: string, value: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementTextToBeContaining(value);
}

export async function thenTextEmpty(meta: string, key: string, not: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementTextToBeEqual('');
}

export async function thenTextEqual(meta: string, key: string, not: string, value: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementTextToBeEqual(value);
}

export async function thenValueContaining(meta: string, key: string, not: string, value: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementValueToBeContaining(value);
}

export async function thenValueEmpty(meta: string, key: string, not: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementValueToBeEqual('');
}

export async function thenValueEqual(meta: string, key: string, not: string, value: string) {
  const selector = getSelector(meta, key);
  const webelement = new WebElement(selector);
  const element = await webelement.$;
  const then = not ? expect(element).not : expect(element);

  await then.elementValueToBeEqual(value);
}
