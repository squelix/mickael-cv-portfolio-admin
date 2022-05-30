module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'sentry-trace', 'baggage'],
      origin: [
        'https://mickael-svelte-portfolio.netlify.app',
        'http://localhost:3000',
        'http://localhost:1337',
      ],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'strapi::compression',
];
