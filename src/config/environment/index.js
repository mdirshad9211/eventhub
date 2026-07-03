import dotenv from 'dotenv';

import { environmentSchema } from './schema.js';

dotenv.config();

const parsedEnvironment = environmentSchema.safeParse(process.env);

if (!parsedEnvironment.success) {
  console.error('❌ Invalid environment configuration');

  console.error(JSON.stringify(parsedEnvironment.error.flatten().fieldErrors, null, 2));

  process.exit(1);
}

const env = parsedEnvironment.data;

const config = Object.freeze({
  environment: {
    nodeEnv: env.NODE_ENV,
    isDevelopment: env.NODE_ENV === 'development',
    isProduction: env.NODE_ENV === 'production',
    isTest: env.NODE_ENV === 'test',
  },

  server: {
    port: env.PORT,
  },

  database: {
    url: env.DATABASE_URL,
  },

  logging: {
    level: env.LOG_LEVEL,
  },
});

export default config;
