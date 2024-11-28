import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import enTranslate from './locals/en/translation.json'
import faTranslate from './locals/fa/translation.json'
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslate,
            },
            fa: {
                translation: faTranslate,
            },
        },
        lng: 'en', // زبان پیش‌فرض
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
