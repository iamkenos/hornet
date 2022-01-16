import * as b from "./browser";
import * as e from "./element";

export * from "./browser";
export * from "./element";
export * from "./types";
export * from "./utils";

export default {
  addBrowserCommands: () => {
    browser.addCommand(b.clearLocalStorage.name, b.clearLocalStorage);
    browser.addCommand(b.clearSessionStorage.name, b.clearSessionStorage);
    browser.addCommand(b.clickCoordinates.name, b.clickCoordinates);
    browser.addCommand(b.closeLastWindow.name, b.closeLastWindow);
    browser.addCommand(b.closeOtherWindows.name, b.closeOtherWindows);
    browser.addCommand(b.dragRelativeToPointer.name, b.dragRelativeToPointer);
    browser.addCommand(b.getLocalStorageItem.name, b.getLocalStorageItem);
    browser.addCommand(b.getSessionStorageItem.name, b.getSessionStorageItem);
    browser.addCommand(b.scrollTo.name, b.scrollTo);
    browser.addCommand(b.scrollToBottom.name, b.scrollToBottom);
    browser.addCommand(b.scrollToTop.name, b.scrollToTop);
    browser.addCommand(b.setLocalStorageItem.name, b.setLocalStorageItem);
    browser.addCommand(b.setSessionStorageItem.name, b.setSessionStorageItem);
    browser.addCommand(b.switchToLastWindow.name, b.switchToLastWindow);
    browser.addCommand(b.switchToParentWindow.name, b.switchToParentWindow);
  },
  addElementCommands: () => {
    browser.addCommand(e.clickUntil.name, e.clickUntil, true);
    browser.addCommand(e.clickWith.name, e.clickWith, true);
    browser.addCommand(e.moveIntoView.name, e.moveIntoView, true);
    browser.addCommand(e.focus.name, e.focus, true);
    browser.addCommand(e.execute.name, e.execute, true);
    browser.addCommand(e.executeAsync.name, e.executeAsync, true);
    browser.addCommand(e.sendKeys.name, e.sendKeys, true);
    browser.addCommand(e.setAttribute.name, e.setAttribute, true);
    browser.addCommand(e.uploadFile.name, e.uploadFile, true);
  }
};
