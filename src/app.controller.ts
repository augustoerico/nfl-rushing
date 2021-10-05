import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(@Res() response: Response) {
    return response.redirect('/players')
  }
}
