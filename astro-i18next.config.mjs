/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'es'],
  i18next: {
    debug: true,
    initImmediate: false,
    ns: ['common', 'hero', 'projects', 'about_me', 'contact'],
    defaultNS: 'common',
    backend: {
      loadPath: './src/locales/{{lng}}/{{ns}}.json', // will look for json files inside language folders
    },
  },
  i18nextPlugins: { fsBackend: 'i18next-fs-backend' },
}
