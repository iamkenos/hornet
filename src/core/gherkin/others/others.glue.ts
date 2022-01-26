import { UseAction, ElementType } from "@core/commands";

export async function setActiveMetadata(action: string, key: string, type: string) {
  const { config } = browser;
  const toStop = action.includes(UseAction.STOP);
  config.runtime.activeMeta = toStop ? undefined : key;

  if (type.includes(ElementType.COMPONENT) || type.includes(ElementType.WIDGET)) {
    config.runtime.activeMetaSelectorKey = toStop ? undefined : key;
  }
}

export async function setActiveMetadataSelectorKey(action: string, key: string) {
  const { config } = browser;
  const toStop = action.includes(UseAction.STOP);
  config.runtime.activeMetaSelectorKey = toStop ? undefined : key;
}