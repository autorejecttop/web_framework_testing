import { Controller, Get, HostParam, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller({ host: ':account.localhost', path: 'admin' })
export class AdminController {
  @Get()
  index(@HostParam('account') account: string, @Res() res: Response): Response {
    if (account && account === 'admin') {
      return res.status(200).send('Welcome, Admin!');
    }

    return res.status(403).send('Unauthorized');
  }
}
