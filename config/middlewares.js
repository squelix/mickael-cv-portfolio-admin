module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      headers: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
        'sentry-trace',
        'baggage',
        'x-access-token',
      ],
      origin: ['*'],
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
