import es from './es.json';

export const defaultLanguage = 'es';

export const languages: Record<string, any> = {
  es,
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