import globalize from 'lib/globalize';

export const LANGUAGE_OPTIONS = [
    { value: 'auto', label: globalize.translate('Auto') },
    { value: 'vi', label: 'Tiếng Việt' },
    { value: 'en-GB', label: 'English (United Kingdom)' },
    { value: 'en-US', label: 'English' }
];

// NOTE: Option `Euskara` (eu) does not exist in legacy date locale options.
export const DATE_LOCALE_OPTIONS = LANGUAGE_OPTIONS.filter(({ value }) => value !== 'eu');
