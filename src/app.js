import Fastify from 'fastify';

import { logger } from './common/logger/index.js';

function buildApp() {
  const app = Fastify({
    logger: false,
    disableRequestLogging: true,
  });

  app.get('/', async () => {
    return {
      service: 'EventHub',
      version: '1.0.0',
      status: 'running',
    };
  });

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
