import { logger } from '../logger/index.js';

function errorHandler(error, request, reply) {
  logger.error(error);

  const statusCode = error.statusCode || 500;

  return reply.status(statusCode).send({
    success: false,
    message: error.message || 'Internal Server Error',
  });
}

export default errorHandler;
