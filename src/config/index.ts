import dotenv from 'dotenv';
import path from 'path';


dotenv.config({ path: path.join(process.cwd(), '.env') });
const config = {
  port: process.env.PORT,
  serverUrl: process.env.SERVER_URL,
  appUrl: process.env.APP_URL,
};

export default config;
