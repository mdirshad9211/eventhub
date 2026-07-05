class HealthService {
  getHealthStatus() {
    return {
      status: 'healthy',
      service: 'EventHub',
      version: '1.0.0',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
}

export default new HealthService();
