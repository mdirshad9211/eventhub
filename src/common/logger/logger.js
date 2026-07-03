import winston from 'winston';

import config from '../../config/environment/index.js';

const { combine, timestamp, errors, json, colorize, printf } = winston.format;

const developmentFormat = combine(
  colorize(),
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  errors({ stack: true }),
  printf(({ timestamp, level, message, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
  })
);

const productionFormat = combine(timestamp(), errors({ stack: true }), json());

const logger = winston.createLogger({
  level: config.logging.level,
  defaultMeta: {
    service: 'eventhub',
  },
  format: config.environment.isProduction ? productionFormat : developmentFormat,
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
    }),
  ],
  exitOnError: false,
});

export default logger;
