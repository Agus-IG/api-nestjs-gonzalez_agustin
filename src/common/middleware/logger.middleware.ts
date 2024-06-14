import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { logger } from '../winston.config';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    logger.info(`Request: ${req.method} ${req.originalUrl}`);
    res.on('finish', () => {
      logger.info(`Response: ${res.statusCode} ${req.method} ${req.originalUrl}`);
    });
    next();
  }
}
