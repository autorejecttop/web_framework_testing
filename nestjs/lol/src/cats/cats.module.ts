import {
  MiddlewareConsumer,
  // Global,
  Module,
  RequestMethod,
} from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { logger } from 'src/middlewares/logger.middleware';
// import { LoggerMiddleware } from 'src/logger.middleware';

// @Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes({
    consumer.apply(logger).forRoutes({
      path: 'cats(.*)',
      method: RequestMethod.GET,
    });
  }
}
