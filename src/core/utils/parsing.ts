export function isURL(str: string) {
  try {
    const url = new URL(str);
    return ["http:", "https:"].includes(url.protocol);
  } catch (e) {
    return false;
  }
}
