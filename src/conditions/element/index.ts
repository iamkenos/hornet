import type { Axis } from "@commands";
import type { SizeContext } from "@commands";
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
import { DisplayedInViewport } from "./DisplayedInViewPort";
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

  public attributeContains(attribute: string, expected: string, not?: boolean) {
    return this.addCondition(new AttributeContains(attribute, expected, not).setElement(this.element));
  }

  public attributeEquals(attribute: string, expected: string, not?: boolean) {
    return this.addCondition(new AttributeEquals(attribute, expected, not).setElement(this.element));
  }

  public attributeExists(attribute: string, not?: boolean) {
    return this.addCondition(new AttributeExists(attribute, not).setElement(this.element));
  }

  public axisLocationEquals(axis: Axis, expected: number, not?: boolean) {
    return this.addCondition(new AxisLocationEquals(axis, expected, not).setElement(this.element));
  }

  public clickable(not?: boolean) {
    return this.addCondition(new Clickable(not).setElement(this.element));
  }

  public countEquals(expected: number, not?: boolean) {
    return this.addCondition(new CountEquals(expected, not).setElement(this.element));
  }

  public countLessThan(expected: number, not?: boolean) {
    return this.addCondition(new CountLessThan(expected, not).setElement(this.element));
  }

  public countMoreThan(expected: number, not?: boolean) {
    return this.addCondition(new CountMoreThan(expected, not).setElement(this.element));
  }

  public cssPropertyExists(property: string, not?: boolean) {
    return this.addCondition(new CssPropertyExists(property, not).setElement(this.element));
  }

  public displayed(not?: boolean) {
    return this.addCondition(new Displayed(not).setElement(this.element));
  }

  public displayedInViewport(not?: boolean) {
    return this.addCondition(new DisplayedInViewport(not).setElement(this.element));
  }

  public enabled(not?: boolean) {
    return this.addCondition(new Enabled(not).setElement(this.element));
  }

  public exists(not?: boolean) {
    return this.addCondition(new Exists(not).setElement(this.element));
  }

  public focused(not?: boolean) {
    return this.addCondition(new Focused(not).setElement(this.element));
  }

  public selected(not?: boolean) {
    return this.addCondition(new Selected(not).setElement(this.element));
  }

  public sizeEquals(width: number, height: number, not?: boolean) {
    return this.addCondition(new SizeEquals(width, height, not).setElement(this.element));
  }

  public sizeSideEquals(side: SizeContext, expeced: number, not?: boolean) {
    return this.addCondition(new SizeSideEquals(side, expeced, not).setElement(this.element));
  }

  public snapshotMatch(filename: string, options?: ImageSnapshotContextOptions[ImageCompareContext.ELEMENT], not?: boolean) {
    return this.addCondition(new SnapshotMatch(ImageCompareContext.ELEMENT, filename, options, not).setElement(this.element));
  }

  public textContains(expected: string, not?: boolean) {
    return this.addCondition(new TextContains(expected, not).setElement(this.element));
  }

  public textEquals(expected: string, not?: boolean) {
    return this.addCondition(new TextEquals(expected, not).setElement(this.element));
  }

  public valueContains(expected: string, not?: boolean) {
    return this.addCondition(new ValueContains(expected, not).setElement(this.element));
  }

  public valueEquals(expected: string, not?: boolean) {
    return this.addCondition(new ValueEquals(expected, not).setElement(this.element));
  }
}
