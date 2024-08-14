const path = require('path');
const dotenv = require('dotenv');

const envName = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env';

dotenv.configDotenv({
  path: path.resolve(__dirname, `../../${envName}`),
});

export default {
  port: process.env.PORT || 3891
}
