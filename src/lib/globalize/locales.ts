const languages = [
    'en-gb',
    'en-us',
    'vi'
];

const locales = languages.map(lang => ({
    lang,
    path: `${lang}.json`
}));

export default locales;
