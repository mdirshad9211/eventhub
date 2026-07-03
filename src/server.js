import { config } from './config/index.js';
import { logger } from './common/logger/index.js';

import buildApp from './app.js';

async function startServer() {
  const app = buildApp();

  try {
    await app.listen({
      port: config.server.port,
      host: '0.0.0.0',
    });

    logger.info(`🚀 EventHub server running on http://localhost:${config.server.port}`);
  } catch (error) {
    logger.error(error);

    process.exit(1);
  }
}

startServer();
