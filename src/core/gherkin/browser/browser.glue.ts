import { WindowDirection } from "@core/commands";
import { WebElement, getSelector, getLabel, getUrl, getTitle } from "@core/generics";
import { parseToken } from "@core/gherkin";

export async function whenScrollTo(direction: WindowDirection) {
  switch (direction) {
    case WindowDirection.TOP: {
      await browser.scrollToTop();
      break;
    }
    default: {
      await browser.scrollToBottom();
      break;
    }
  }
}

export async function whenScrollToCoordinates(x: number, y: number) {
  await browser.scrollTo({ x, y });
}

export async function whenSizeMaximize() {
  await browser.maximizeWindow();
}

export async function whenSize(width: string, height: string) {
  await browser.setWindowSize(parseInt(width), parseInt(height));
}

export async function whenOpen(meta: string, url: string) {
  switch (url) {
    case null: {
      await browser.url(getUrl(meta));
      break;
    }
    default: {
      await browser.url(url);
      break;
    }
  }
}

export async function whenOpenNewWindow(meta: string, url: string) {
  switch (url) {
    case null: {
      await browser.url(getUrl(meta));
      break;
    }
    default: {
      await browser.url(url);
      break;
    }
  }
}

export async function thenTitleContaining(not: string, value: string, meta: string) {
  const then = not ? expect(browser).not : expect(browser);

  switch (value) {
    case null: {
      await then.browserTitleToBeContaining(getTitle(meta))
      break;
    }
    default: {
      await then.browserTitleToBeContaining(value)
      break;
    }
  }
}

export async function thenTitleEquals(not: string, value: string, meta: string) {
  const then = not ? expect(browser).not : expect(browser);

  switch (value) {
    case null: {
      await then.browserTitleToBeEqual(getTitle(meta))
      break;
    }
    default: {
      await then.browserTitleToBeEqual(value)
      break;
    }
  }
}