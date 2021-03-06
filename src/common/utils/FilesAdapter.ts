import glob from "glob";
import path from "path";

import { logger } from "@common";

export abstract class FilesAdapter {
  public static resolveGlob(baseDir: string, fileGlob: string[], isStrict = false): string[] {
    const resolved = new Set<string>();

    fileGlob.filter(Boolean).forEach((i: string): void => {
      const filePath: string = path.isAbsolute(i) ? i : path.resolve(path.join(baseDir, i));
      const files: string[] = glob.sync(filePath);

      if (files.length === 0) {
        logger.warn("No matches found for glob %s", filePath);
      } else {
        files.forEach((i) => resolved.add(path.resolve(i)));
      }
    });

    if (resolved.size === 0 && isStrict) {
      throw new Error("Unable to resolve any existing file from the given paths. See warnings.");
    }

    return [...resolved];
  }
}
