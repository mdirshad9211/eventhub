import healthRoutes from './routes/health.routes.js';

async function healthModule(fastify) {
  fastify.register(healthRoutes, {
    prefix: '/health',
  });
}

export default healthModule;
