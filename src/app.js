import Fastify from 'fastify';
import healthModule from './modules/health/index.js';

import { logger } from './common/logger/index.js';

function buildApp() {
  const app = Fastify({
    logger: false,
    disableRequestLogging: true,
  });

  app.register(healthModule);

  app.setErrorHandler((error, request, reply) => {
    logger.error(error);

    return reply.status(500).send({
      success: false,
      message: 'Internal Server Error',
    });
  });

  return app;
}

export default buildApp;
