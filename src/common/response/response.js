class Response {
  static success(reply, data, message = 'Success', statusCode = 200) {
    return reply.status(statusCode).send({
      success: true,
      message,
      data,
    });
  }

  static created(reply, data, message = 'Resource created') {
    return reply.status(201).send({
      success: true,
      message,
      data,
    });
  }

  static noContent(reply) {
    return reply.status(204).send();
  }

  static error(reply, message = 'Internal Server Error', statusCode = 500) {
    return reply.status(statusCode).send({
      success: false,
      message,
    });
  }
}

export default Response;
