import healthService from '../service/health.service.js';
import { Response } from '../../../common/response/index.js';

class HealthController {
  async getHealth(request, reply) {
    const health = healthService.getHealthStatus();

    return Response.success(reply, health);
  }
}

export default new HealthController();
