const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/list',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
  '@fullcalendar/timeline',
]);

module.exports = withTM({
  swcMinify: false,
  trailingSlash: true,
  env: {
    // HOST
    HOST_API_KEY: '',
    // MAPBOX
    MAPBOX_API: 'pk.eyJ1IjoibWluaW1hbHByb2QiLCJhIjoiY2trNTl1b3dzMWJ2MjJzcnk1amEzemh3bCJ9.D1069PhiG7WWBRhkXOOXVA',
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:'pk_test_51M5wNrGcZNQtrpugCDQgiEp5QTO63VqbOd7WuVBPhUBuEieATdS0jciPDHeo4BAyCBp083fg3yqTMtQFqdRKZmlL00ObKpHK36',
    STRIPE_SECRET_KEY:'',
    WEBHOOK_SECRET_KEY:'whsec_bf8834ef4ce012732b26435bb8bb276b54634673d8eb3d75bff94457245b0d47',
    // FIREBASE
    FIREBASE_API_KEY: '',
    FIREBASE_AUTH_DOMAIN: '',
    FIREBASE_PROJECT_ID: '',
    FIREBASE_STORAGE_BUCKET: '',
    FIREBASE_MESSAGING_SENDER_ID: '',
    FIREBASE_APPID: '',
    FIREBASE_MEASUREMENT_ID: '',
    // AWS COGNITO
    AWS_COGNITO_USER_POOL_ID: '',
    AWS_COGNITO_CLIENT_ID: '',
    // AUTH0
    AUTH0_CLIENT_ID: '',
    AUTH0_DOMAIN: '',
  },
});
