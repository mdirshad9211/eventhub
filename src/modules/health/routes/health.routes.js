import healthController from '../controller/health.controller.js';

async function healthRoutes(fastify) {
  fastify.get('/', healthController.getHealth);
}

export default healthRoutes;
