import type { Selector } from "webdriverio";
import type { Axis } from "@core/commands";
import type { SizeContext } from "@core/commands";
import type { ImageSnapshotContextOptions } from "@core/conditions";
import { ImageCompareContext } from "@core/commands";
import { SnapshotMatch } from "@core/conditions/browser/SnapshotMatch";

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
  private readonly selector: Selector;

  public constructor(selector: Selector) {
    super();
    this.selector = selector;
  }

  public attributeContains(attribute: string, expected: string, not?: boolean) {
    return this.addCondition(new AttributeContains(attribute, expected, not).setSelector(this.selector));
  }

  public attributeEquals(attribute: string, expected: string, not?: boolean) {
    return this.addCondition(new AttributeEquals(attribute, expected, not).setSelector(this.selector));
  }

  public attributeExists(attribute: string, not?: boolean) {
    return this.addCondition(new AttributeExists(attribute, not).setSelector(this.selector));
  }

  public axisLocationEquals(axis: Axis, expected: number, not?: boolean) {
    return this.addCondition(new AxisLocationEquals(axis, expected, not).setSelector(this.selector));
  }

  public clickable(not?: boolean) {
    return this.addCondition(new Clickable(not).setSelector(this.selector));
  }

  public countEquals(expected: number, not?: boolean) {
    return this.addCondition(new CountEquals(expected, not).setSelector(this.selector));
  }

  public countLessThan(expected: number, not?: boolean) {
    return this.addCondition(new CountLessThan(expected, not).setSelector(this.selector));
  }

  public countMoreThan(expected: number, not?: boolean) {
    return this.addCondition(new CountMoreThan(expected, not).setSelector(this.selector));
  }

  public cssPropertyExists(property: string, not?: boolean) {
    return this.addCondition(new CssPropertyExists(property, not).setSelector(this.selector));
  }

  public displayed(not?: boolean) {
    return this.addCondition(new Displayed(not).setSelector(this.selector));
  }

  public displayedInViewport(not?: boolean) {
    return this.addCondition(new DisplayedInViewport(not).setSelector(this.selector));
  }

  public enabled(not?: boolean) {
    return this.addCondition(new Enabled(not).setSelector(this.selector));
  }

  public exists(not?: boolean) {
    return this.addCondition(new Exists(not).setSelector(this.selector));
  }

  public focused(not?: boolean) {
    return this.addCondition(new Focused(not).setSelector(this.selector));
  }

  public selected(not?: boolean) {
    return this.addCondition(new Selected(not).setSelector(this.selector));
  }

  public sizeEquals(width: number, height: number, not?: boolean) {
    return this.addCondition(new SizeEquals(width, height, not).setSelector(this.selector));
  }

  public sizeSideEquals(side: SizeContext, expeced: number, not?: boolean) {
    return this.addCondition(new SizeSideEquals(side, expeced, not).setSelector(this.selector));
  }

  public snapshotMatch(filename: string, options?: ImageSnapshotContextOptions[ImageCompareContext.ELEMENT], not?: boolean) {
    return this.addCondition(new SnapshotMatch(ImageCompareContext.ELEMENT, filename, options, not).setSelector(this.selector));
  }

  public textContains(expected: string, not?: boolean) {
    return this.addCondition(new TextContains(expected, not).setSelector(this.selector));
  }

  public textEquals(expected: string, not?: boolean) {
    return this.addCondition(new TextEquals(expected, not).setSelector(this.selector));
  }

  public valueContains(expected: string, not?: boolean) {
    return this.addCondition(new ValueContains(expected, not).setSelector(this.selector));
  }

  public valueEquals(expected: string, not?: boolean) {
    return this.addCondition(new ValueEquals(expected, not).setSelector(this.selector));
  }
}
