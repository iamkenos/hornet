import type { DataTable } from "@cucumber/cucumber";
import crand from "crypto-random-string";
import { DateTime } from "luxon";

export abstract class GherkinAdapter {
  private static GHERKIN_TOKENS = {
    /**
     * Returns a value from the browser config
     *
     * Samples:
     *
     * ```
     *  - $CONF{baseUrl};          ------> http://localhost:8080
     *  - foo$CONF{baseUrl};bar    ------> foohttp://localhost:8080bar
     * ```
     **/
    conf: /(?<conf>(?<conf_misc_start>.+)?\$CONF\{(?<conf_path>[a-zA-Z0-9_]+)};(?<conf_misc_end>.+)?)/,
    /**
     * Returns a string relative to the current date
     *
     * Samples:
     *
     * Given: current day is Jan 02, 2021
     * ```
     *  - $DATE{dd¦2¦days};          ------> 04
     *  - $DATE{dd-M-yyyy¦-2¦years}; ------> 02-1-2019
     *  - $DATE{dd-M-yyyy}; foobar   ------> 02-1-2021 foobar
     *  - foobar $DATE{dd-M-yyyy};   ------> foobar 02-1-2021
     *  - foo$DATE{dd-M-yyyy};bar    ------> foo02-1-2021bar
     * ```
     **/
    date: /(?<date>(?<date_misc_start>.+)?\$DATE\{(?<date_format>[^¦]+)(?<date_offset>¦(?<date_offset_val>-?\d+)¦(?<date_offset_on>.+))?};(?<date_misc_end>.+)?)/,
    /**
     * Returns a string coming from environment variables
     *
     * Samples:
     *
     * ```
     *  - $ENV{PUBLIC_URL};          ------> /
     *  - foo$ENV{PUBLIC_URL};bar    ------> foo/bar
     * ```
     **/
    env: /(?<env>(?<env_misc_start>.+)?\$ENV\{(?<env_var>[a-zA-Z0-9_]+)};(?<env_misc_end>.+)?)/,
    /**
     * Returns a random string of a specified format and length
     *
     * Samples:
     *
     * ```
     *  - $RAND{10};                 ------> 2cf05d94db
     *  - $RAND{10¦base64};          ------> YMiMbaQl6I
     *  - $RAND{10¦url-safe};        ------> YN-tqc8pOw
     *  - $RAND{10¦numeric};         ------> 8314659141
     *  - $RAND{10¦alphanumeric};    ------> DMuKL8YtE7
     *  - foo$RAND{baseUrl|abc};bar  ------> fooabaaccabacbar
     * ```
     **/
    rand: /(?<rand>(?<rand_misc_start>.+)?\$RAND\{(?<rand_length>[^¦]+)(?<rand_format>¦(?<rand_format_val>base64|url-safe|numeric|alphanumeric|.+))?};(?<rand_misc_end>.+)?)/
  };

  /**
   * Intended to churn out dynamic data, like dates, etc.
   * @param token see GHERKIN_TOKENS
   * @returns the transformed data if it matches any tokens or the same string if it doesnt
   */
  public static parseToken(token: string) {
    const regexp = new RegExp(
      this.GHERKIN_TOKENS.conf.source + "|" +
      this.GHERKIN_TOKENS.date.source + "|" +
      this.GHERKIN_TOKENS.env.source + "|" + 
      this.GHERKIN_TOKENS.rand.source
    );
    const matches = regexp.exec(token);
    if (matches && matches.groups) {
      const { groups } = matches;
      if (groups.conf) {
        const path = (groups.conf_path || "").split(".");
        const prefix = groups.conf_misc_start || "";
        const content = path.reduce((i, j): object => (i && i[j] ? i[j] : null), browser.config);
        const suffix = groups.conf_misc_end || "";
        return `${prefix}${content}${suffix}`;
      }
      if (groups.date) {
        const offset = { [groups.date_offset_on || "days"]: groups.date_offset_val || 0 };
        const prefix = groups.date_misc_start || "";
        const content = DateTime.local().plus(offset).toFormat(groups.date_format);
        const suffix = groups.date_misc_end || "";
        return `${prefix}${content}${suffix}`;
      }
      if (groups.env) {
        const prefix = groups.env_misc_start || "";
        const content = process.env[groups.env_var] || "";
        const suffix = groups.env_misc_end || "";
        return `${prefix}${content}${suffix}`;
      }
      if (groups.rand) {
        const format = groups.rand_format_val;
        const prefix = groups.rand_misc_start || "";
        const type = ["base64", "url-safe", "numeric", "alphanumeric"].includes(format); 
        const content = crand({ length: +groups.rand_length, [type ? "type" : "characters"]: format });
        const suffix = groups.rand_misc_end || "";
        return `${prefix}${content}${suffix}`;
      }
    }
    return token;
  }

  public static getDataTableRows(table: DataTable, column?: number): string[];

  public static getDataTableRows(table: DataTable, column: "all"): string[][];

  public static getDataTableRows(table: DataTable, column?: number | "all") {
    column = column || 1;
    if (isNaN(column as any)) {
      return table.rows() as string[][];
    } else {
      const rows =
        column > Object.keys(table.raw()[0]).length
          ? [] // return empty if column number asked is non-existing
          : (table
            .raw()
            .map((i) => i[(column as number) - 1])
            .slice(1) as string[]); // slice removes headers
      return rows;
    }
  }

  public static getDataTableHashes(table: DataTable, toLower = true) {
    const lowercaseKeys = <T>(object: { [key: string]: T }): { [key: string]: T } => {
      const result: { [key: string]: T } = {};
      for (const [key, value] of Object.entries(object)) {
        result[key.toLowerCase()] = value;
      }
      return result;
    };

    if (toLower) {
      return table.hashes().map((hash) => lowercaseKeys(hash));
    } else {
      return table.hashes();
    }
  }
}
