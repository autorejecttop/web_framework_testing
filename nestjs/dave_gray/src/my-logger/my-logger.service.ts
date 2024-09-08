import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  log(message: any, context?: string): void {
    const entry = `${context}\t${message}`;

    console.log(entry);

    super.log(message, context);
  }

  error(message: any, stackOrContext?: string): void {
    const entry = `${stackOrContext}\t${message}`;

    console.log(entry);

    super.error(message, stackOrContext);
  }
}
