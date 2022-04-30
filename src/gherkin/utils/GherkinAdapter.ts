import type { DataTable } from "@cucumber/cucumber";
import { DateTime } from "luxon";

export abstract class GherkinAdapter {
  private static GHERKIN_TOKENS = {
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
     * TODO
     * Returns a random string of a specified format and length
     *
     * Samples:
     *
     * ```
     * ```
     **/
    rand: /(?<rand>(?<rand_misc_start>.+)?\$RAND\{(?<rand_format>[a-zA-Z0-9_]+)};(?<rand_misc_end>.+)?)/,
    /**
     * TODO
     * Returns a value from the browser config
     *
     * Samples:
     *
     * ```
     * ```
     **/
    conf: /(?<conf>(?<conf_misc_start>.+)?\$CONF\{(?<conf_path>[a-zA-Z0-9_]+)};(?<conf_misc_end>.+)?)/
  };

  /**
   * Intended to churn out dynamic data, like dates, etc.
   * @param token see GHERKIN_TOKENS
   * @returns the transformed data if it matches any tokens or the same string if it doesnt
   */
  public static parseToken(token: string) {
    const empty = "";
    const rex = new RegExp(this.GHERKIN_TOKENS.date.source + "|" + this.GHERKIN_TOKENS.env.source);
    const matches = rex.exec(token);
    if (matches && matches.groups) {
      const { groups } = matches;
      if (groups.date) {
        const offset: any = {};
        offset[groups.date_offset_on || "days"] = groups.date_offset_val || 0;
        const date = DateTime.local().plus(offset).toFormat(groups.date_format);
        return `${groups.date_misc_start || empty}${date}${groups.date_misc_end || empty}`;
      }
      if (groups.env) {
        return `${groups.env_misc_start || empty}${process.env[groups.env_var] || empty}${groups.env_misc_end || empty
        }`;
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
