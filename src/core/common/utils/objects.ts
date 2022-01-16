/** see [Sequential find](https://stackoverflow.com/a/63795192/2285470) */
export async function arrayFind<T>(array: T[], predicate: (t: T) => Promise<boolean>): Promise<T | undefined> {
  for (const t of array) {
    if (await predicate(t)) {
      return t;
    }
  }
  return undefined;
}
