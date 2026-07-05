import healthService from '../service/health.service.js';

class HealthController {
  async getHealth(request, reply) {
    const health = healthService.getHealthStatus();

    return reply.status(200).send({
      success: true,
      data: health,
    });
  }
}

export default new HealthController();
