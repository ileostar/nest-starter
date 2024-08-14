const path = require('path');
const dotenv = require('dotenv');

const envName = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env';

dotenv.config({
  path: path.resolve(__dirname, `../../${envName}`),
});
export default {
  port: process.env.PORT || 3891,
  swaggerConfig: {
    customSiteTitle: 'Nest Starter',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
    ],
  }
}
