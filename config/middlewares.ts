export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
          'script-src': ['https://cdn.ckeditor.com'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      origin: [
        'https://admin.mickael-depardon.com',
        'https://admin.mickael-depardon.fr',
        'https://mickael-depardon.fr',
        'https://mickael-depardon.com',
        'https://www.mickael-depardon.fr',
        'https://www.mickael-depardon.com',
        'https://mickael-cv-portfolio-admin.herokuapp.com',
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
  {
    name: 'strapi::compression',
    config: {
      br: true,
      gzip: true,
    },
  },
  'global::custom-header',
];
