import es from './es.json';
import en from './en.json';

export type Language = 'es' | 'en';

export const defaultLanguage: Language = 'es';
export const acceptedLanguages: Language[] = ['es', 'en'];
export let selectedLanguage: Language = defaultLanguage;

export function setSelectedLanguage(lang: Language) {
  selectedLanguage = lang;
}

export const handleLanguageChange = (lang: Language) => {
  //redirect to the new language
  window.location.href = `/${lang}`;
}

// contains language translations in object form
export const languages: Record<string, any> = {
  es,
  en,
};

export function useTranslations(lang: string) {
  return function t(key: string) {
    return getNestedValue(languages[lang], key);
  };
}

function getNestedValue(obj: any, path: string) {
  return path.split('.').reduce((prev, curr) => {
    return prev ? prev[curr] : null;
  }, obj);
}