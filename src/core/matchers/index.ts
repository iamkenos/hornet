import { ctoBeExisting } from "./element/ctoBeExisting";
import { ctoBeFocusedOn } from "./element/ctoBeFocusedOn";

export default {
  addCustomMatchers: () => {
    expect.extend({ ctoBeExisting });
    expect.extend({ ctoBeFocusedOn });
  }
};
