export async function setActiveMetadata(action: string, key: string, type: string) {
  const { config } = browser;
  const toStop = action.includes("stop");
  config.activeMeta = toStop ? undefined : key;

  if (type !== "page") {
    config.activeMetaSelectorKey = toStop ? undefined : key;
  }
}
export async function setActiveMetadataSelectorKey(action: string, key: string) {
  const { config } = browser;
  const toStop = action.includes("stop");
  config.activeMetaSelectorKey = toStop ? undefined : key;
}
