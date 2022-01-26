export function isURL(str: string) {
  try {
    const url = new URL(str);
    return ["http:", "https:"].includes(url.protocol);
  } catch (e) {
    return false;
  }
}

export function isJSON(str: string) {
  if (typeof str !== "string") return false;
  try {
    const result = JSON.parse(str);
    return result instanceof Object || result instanceof Array;
  } catch (e) {
    return false;
  }
}

export function kvpToObject(toParse: string, entrySeparator = ";", kvpSeparator = ":"): any {
  return (toParse || "").split(entrySeparator)
    .reduce((i, j) => {
      const kvp = j.split(kvpSeparator).map(i => i.trim());
      return { ...i, [kvp[0]]: kvp[1] };
    }, {});
}