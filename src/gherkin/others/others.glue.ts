import { ElementType, UseAction } from "@commands";

export async function whenSetActiveMetadata(action: string, key: string, type: string) {
  const { config } = browser;
  const toStop = action.includes(UseAction.STOP);
  config.runtime.activeMeta = toStop ? undefined : key;

  if (type.includes(ElementType.COMPONENT) || type.includes(ElementType.WIDGET)) {
    config.runtime.activeMetaSelectorKey = toStop ? undefined : key;
  }
}

export async function whenSetActiveSelector(action: string, key: string) {
  const { config } = browser;
  const toStop = action.includes(UseAction.STOP);
  config.runtime.activeMetaSelectorKey = toStop ? undefined : key;
}
