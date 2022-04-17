import fs from "fs-extra";
import glob from "glob";
import path from "path";

import { logger } from "@core/common";

export function filesFromGlob(fileGlob: string[], baseDir: string = process.cwd(), isStrict = false): string[] {
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

export function readFileSync(path: string): string {
  return fs.readFileSync(path, "utf8");
}
