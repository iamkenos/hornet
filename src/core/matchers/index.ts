import { browserCookieToBeContaining } from "./browser/browserCookieToBeContaining";
import { browserCookieToBeEqual } from "./browser/browserCookieToBeEqual";
import { browserCookieToBeExisting } from "./browser/browserCookieToBeExisting";
import { browserModalTextToBeContaining } from "./browser/browserModalTextToBeContaining";
import { browserModalTextToBeEqual } from "./browser/browserModalTextToBeEqual";
import { browserModalToBeExisting } from "./browser/browserModalToBeExisting";
import { browserTitleToBeContaining } from "./browser/browserTitleToBeContaining";
import { browserTitleToBeEqual } from "./browser/browserTitleToBeEqual";
import { browserToBeReady } from "./browser/browserToBeReady";
import { browserUrlPathToBeContaining } from "./browser/browserUrlPathToBeContaining";
import { browserUrlPathToBeEqual } from "./browser/browserUrlPathToBeEqual";
import { browserUrlToBeContaining } from "./browser/browserUrlToBeContaining";
import { browserUrlToBeEqual } from "./browser/browserUrlToBeEqual";
import { browserWindowCountToBeEqual } from "./browser/browserWindowCountToBeEqual";
import { browserWindowCountToBeLessThan } from "./browser/browserWindowCountToBeLessThan";
import { browserWindowCountToBeMoreThan } from "./browser/browserWindowCountToBeMoreThan";

import { elementToBeExisting } from "./element/elementToBeExisting";
import { elementToBeFocused } from "./element/elementToBeFocused";

import { arrayToBeContaining } from "./others/arrayToBeContaining";
import { arrayToBeEquals } from "./others/arrayToBeEquals";
import { customConditionToBeTrue } from "./others/customConditionToBeTrue";

export default {
  addCustomMatchers: () => {
    // browser
    expect.extend({ browserCookieToBeContaining });
    expect.extend({ browserCookieToBeEqual });
    expect.extend({ browserCookieToBeExisting });
    expect.extend({ browserModalTextToBeContaining });
    expect.extend({ browserModalTextToBeEqual });
    expect.extend({ browserModalToBeExisting });
    expect.extend({ browserTitleToBeContaining });
    expect.extend({ browserTitleToBeEqual });
    expect.extend({ browserToBeReady });
    expect.extend({ browserUrlPathToBeContaining });
    expect.extend({ browserUrlPathToBeEqual });
    expect.extend({ browserUrlToBeContaining });
    expect.extend({ browserUrlToBeEqual });
    expect.extend({ browserWindowCountToBeEqual });
    expect.extend({ browserWindowCountToBeLessThan });
    expect.extend({ browserWindowCountToBeMoreThan });

    // element
    expect.extend({ elementToBeExisting });
    expect.extend({ elementToBeFocused });

    // others
    expect.extend({ arrayToBeContaining });
    expect.extend({ arrayToBeEquals });
    expect.extend({ customConditionToBeTrue });
  }
};
