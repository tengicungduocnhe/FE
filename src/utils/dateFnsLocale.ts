import enUS from 'date-fns/locale/en-US';

const LOCALE_MAP: Record<string, string> = {
    'en-gb': 'en-GB',
    'en-us': 'en-US',
    'vi': 'vi'

};

const DEFAULT_LOCALE = 'vi';

let localeString = DEFAULT_LOCALE;
let locale = enUS;

export function fetchLocale(localeName: string) {
    return import(`date-fns/locale/${localeName}/index.js`);
}

export function normalizeLocale(localeName: string) {
    return LOCALE_MAP[localeName]
        || LOCALE_MAP[localeName.replace(/-.*/, '')]
        || DEFAULT_LOCALE;
}

export async function updateLocale(newLocale: string) {
    console.debug('[dateFnsLocale] updating date-fns locale', newLocale);
    localeString = normalizeLocale(newLocale);
    console.debug('[dateFnsLocale] mapped to date-fns locale', localeString);
    locale = await fetchLocale(localeString);
}

export function getLocale() {
    return locale;
}

export function getLocaleWithSuffix() {
    return {
        addSuffix: true,
        locale
    };
}
