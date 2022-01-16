export const RETRY = () => ({ wrapperOptions: { retry: browser.config.stepRetries } });

export const BY_LINK_TEXT = (text: string) => `=${text}`