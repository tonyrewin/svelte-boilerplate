import { setContext, getContext } from "svelte";
import type { Readable, Writable } from "svelte/store";
import { I18nService } from "./i18n-service";
import { I18NextTranslationService, TType } from "./translation-service";

export const initLocalizationService = (): I18nService => {
  // Initialize our services
  const i18n = new I18nService();
  const tranlator = new I18NextTranslationService(i18n);

  // Setting the Svelte context
  setLocalization({
    t: tranlator.translate,
    currentLanguage: tranlator.locale,
  });

  return i18n;
};

class LocalizationContext {
  i18n: I18nService;
}

export const initLocalizationContext = (): LocalizationContext => {
  return { i18n: initLocalizationService() };
};

const CONTEXT_KEY = "t";

export type I18nContext = {
  t: Readable<TType>;
  currentLanguage: Writable<string>;
};

export const setLocalization = (context: I18nContext): void => {
  return setContext<I18nContext>(CONTEXT_KEY, context);
};

// To make retrieving the t function easier.
export const getLocalization = (): I18nContext => {
  return getContext<I18nContext>(CONTEXT_KEY);
};
