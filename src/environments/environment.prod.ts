// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  firebase: {
    projectId: 'feedbapp-cl',
    appId: '1:338386821517:web:1a8d83d50edce40fb4ddc4',
    storageBucket: 'feedbapp-cl.appspot.com',
    apiKey: 'AIzaSyAv79dtKyI4Glaj7O4OQBbLUHmYA5bsZRU',
    authDomain: 'feedbapp-cl.firebaseapp.com',
    messagingSenderId: '338386821517',
    measurementId: 'G-F2DVZ9NF2X',
  },
  production: true,
  version: env['npm_package_version'],
  serverUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'es-ES',
  supportedLanguages: ['es-ES'],
};
