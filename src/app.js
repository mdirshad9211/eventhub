import Fastify from 'fastify';
import healthModule from './modules/health/index.js';
import { errorHandler } from './common/errors/index.js';

function buildApp() {
  const app = Fastify({
    logger: false,
    disableRequestLogging: true,
  });

  app.register(healthModule);

  app.setErrorHandler(errorHandler);

  return app;
}

export default buildApp;
