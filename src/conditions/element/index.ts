import type { Axis, SizeContext } from "@commands";
import type { ImageSnapshotContextOptions } from "@conditions";
import { ImageCompareContext } from "@commands";
import { SnapshotMatch } from "@conditions/browser/SnapshotMatch";

import { ExpectedConditions } from "../ExpectedConditions";
import { AttributeContains } from "./AttributeContains";
import { AttributeEquals } from "./AttributeEquals";
import { AttributeExists } from "./AttributeExists";
import { AxisLocationEquals } from "./AxisLocationEquals";
import { Clickable } from "./Clickable";
import { CountEquals } from "./CountEquals";
import { CountLessThan } from "./CountLessThan";
import { CountMoreThan } from "./CountMoreThan";
import { CssPropertyExists } from "./CssPropertyExists";
import { Displayed } from "./Displayed";
import { DisplayedInViewport } from "./DisplayedInViewport";
import { Enabled } from "./Enabled";
import { Exists } from "./Exists";
import { Focused } from "./Focused";
import { Selected } from "./Selected";
import { SizeEquals } from "./SizeEquals";
import { SizeSideEquals } from "./SizeSideEquals";
import { TextContains } from "./TextContains";
import { TextEquals } from "./TextEquals";
import { ValueContains } from "./ValueContains";
import { ValueEquals } from "./ValueEquals";

export class ElementConditions extends ExpectedConditions {
  private readonly element: WebdriverIO.Element;

  public constructor(element: WebdriverIO.Element) {
    super();
    this.element = element;
  }

  public attributeContains(attribute: string, expected: string, preferred?: boolean) {
    return this.addCondition(new AttributeContains(attribute, expected, preferred).setElement(this.element));
  }

  public attributeEquals(attribute: string, expected: string, preferred?: boolean) {
    return this.addCondition(new AttributeEquals(attribute, expected, preferred).setElement(this.element));
  }

  public attributeExists(attribute: string, preferred?: boolean) {
    return this.addCondition(new AttributeExists(attribute, preferred).setElement(this.element));
  }

  public axisLocationEquals(axis: Axis, expected: number, preferred?: boolean) {
    return this.addCondition(new AxisLocationEquals(axis, expected, preferred).setElement(this.element));
  }

  public clickable(preferred?: boolean) {
    return this.addCondition(new Clickable(preferred).setElement(this.element));
  }

  public countEquals(expected: number, preferred?: boolean) {
    return this.addCondition(new CountEquals(expected, preferred).setElement(this.element));
  }

  public countLessThan(expected: number, preferred?: boolean) {
    return this.addCondition(new CountLessThan(expected, preferred).setElement(this.element));
  }

  public countMoreThan(expected: number, preferred?: boolean) {
    return this.addCondition(new CountMoreThan(expected, preferred).setElement(this.element));
  }

  public cssPropertyExists(property: string, preferred?: boolean) {
    return this.addCondition(new CssPropertyExists(property, preferred).setElement(this.element));
  }

  public displayed(preferred?: boolean) {
    return this.addCondition(new Displayed(preferred).setElement(this.element));
  }

  public displayedInViewport(preferred?: boolean) {
    return this.addCondition(new DisplayedInViewport(preferred).setElement(this.element));
  }

  public enabled(preferred?: boolean) {
    return this.addCondition(new Enabled(preferred).setElement(this.element));
  }

  public exists(preferred?: boolean) {
    return this.addCondition(new Exists(preferred).setElement(this.element));
  }

  public focused(preferred?: boolean) {
    return this.addCondition(new Focused(preferred).setElement(this.element));
  }

  public selected(preferred?: boolean) {
    return this.addCondition(new Selected(preferred).setElement(this.element));
  }

  public sizeEquals(width: number, height: number, preferred?: boolean) {
    return this.addCondition(new SizeEquals(width, height, preferred).setElement(this.element));
  }

  public sizeSideEquals(side: SizeContext, expeced: number, preferred?: boolean) {
    return this.addCondition(new SizeSideEquals(side, expeced, preferred).setElement(this.element));
  }

  public snapshotMatch(filename: string, options?: ImageSnapshotContextOptions[ImageCompareContext.ELEMENT], preferred?: boolean) {
    return this.displayed().addCondition(new SnapshotMatch(ImageCompareContext.ELEMENT, filename, options, preferred).setElement(this.element));
  }

  public textContains(expected: string, preferred?: boolean) {
    return this.addCondition(new TextContains(expected, preferred).setElement(this.element));
  }

  public textEquals(expected: string, preferred?: boolean) {
    return this.addCondition(new TextEquals(expected, preferred).setElement(this.element));
  }

  public valueContains(expected: string, preferred?: boolean) {
    return this.addCondition(new ValueContains(expected, preferred).setElement(this.element));
  }

  public valueEquals(expected: string, preferred?: boolean) {
    return this.addCondition(new ValueEquals(expected, preferred).setElement(this.element));
  }
}
