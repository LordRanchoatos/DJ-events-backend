module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'strapi::cors',

  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      header: '*',
      origin: ['http://localhost:3000']
    }
  }

];












// module.exports = [{
//   load: {
//     before: ["timer", "responseTime", "logger", "cors", "responses", "gzip"],
//     after: ["parser", "router"],
//   },
//   settings: {
//     cors: {
//       enabled: true,
//       origin: ["*"],
//     },
//   },
// }]
