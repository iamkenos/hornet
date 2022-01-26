import type { DataTable } from "@cucumber/cucumber";
import { DateTime } from "luxon";

const GHERKIN_TOKENS = {
  /**
   * ```
   * This group gives you a date string relative to the current date
   * Syntax: (optional)any$DATE{format(optional)¦offset¦offset on};(optional)any
   * Samples:
   *  Given: current day is Jan 02, 2021
   *  - $DATE{dd¦2¦days};          ------> 04
   *  - $DATE{dd-M-yyyy¦-2¦years}; ------> 02-1-2019
   *  - $DATE{dd-M-yyyy}; foobar   ------> 02-1-2021 foobar
   *  - foobar $DATE{dd-M-yyyy};   ------> foobar 02-1-2021
   *  - foo$DATE{dd-M-yyyy};bar    ------> foo02-1-2021bar
   * ```
   **/
  date: /(?<date>(?<date_misc_start>.+)?\$DATE\{(?<date_format>[^¦]+)(?<date_offset>¦(?<date_offset_val>-?\d+)¦(?<date_offset_on>.+))?};(?<date_misc_end>.+)?)/
};

/**
 * Intended to churn out dynamic data, like dates, etc.
 * @param token see GHERKIN_TOKENS
 * @returns the transformed data if it matches any tokens or the same string if it doesnt
 */
export function parseToken(token: string) {
  const rex = new RegExp(GHERKIN_TOKENS.date.source);
  const matches = rex.exec(token);
  if (matches && matches.groups) {
    const { groups } = matches;
    if (groups.date) {
      const offset: any = {};
      offset[groups.date_offset_on || "days"] = groups.date_offset_val || 0;
      const date = DateTime.local().plus(offset).toFormat(groups.date_format);
      return `${groups.date_misc_start || ""}${date}${groups.date_misc_end || ""}`;
    }
  }
  return token;
}


export function getDataTableRows(table: DataTable, column?: number): string[];

export function getDataTableRows(table: DataTable, column: "all"): string[][];

export function getDataTableRows(table: DataTable, column?: number | "all") {
  column = column || 1;
  if (isNaN(column as any)) {
    return table.rows() as string[][];
  } else {
    const rows = column > Object.keys(table.raw()[0]).length
      ? [] // return empty if column number asked is non-existing
      : table.raw().map(i => i[(column as number) - 1]).slice(1) as string[]; // slice removes headers
    return rows;
  }
}

export function getDataTableHashes(table: DataTable, toLower = true) {
  const lowercaseKeys = <T>(object: { [key: string]: T }): { [key: string]: T } => {
    const result: { [key: string]: T } = {};
    for (const [key, value] of Object.entries(object)) {
      result[key.toLowerCase()] = value;
    }
    return result;
  };

  if (toLower) {
    return table.hashes().map(hash => lowercaseKeys(hash));
  } else {
    return table.hashes();
  }
}