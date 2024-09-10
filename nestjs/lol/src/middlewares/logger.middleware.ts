import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: FastifyRequest, res: FastifyReply, next: () => void) {
//     console.log('Request...');
//     next();
//   }
// }

export function logger(
  req: FastifyRequest,
  res: FastifyReply,
  next: () => void,
) {
  console.log('Request...');
  next();
}
