import { Controller, Get, Render, Req } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Request } from 'express';
import { parse } from './parsers/filters';
import { parse as parseToRespose } from './parsers/responses';
import { parse as parseToCsv } from 'json2csv';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  @Render('players/index')
  readMany(@Req() request: Request) {
    return this.doReadMany(request);
  }

  @Get('?.json')
  readManyJson(@Req() request: Request) {
    return this.doReadMany(request);
  }

  @Get('?.csv')
  readManyCsv(@Req() request: Request) {
    const result = this.doReadMany(request);
    return parseToCsv(result.items);
  }

  doReadMany(request: Request) {
    const filter = parse(request.query as any);
    const result = this.playersService.readMany(filter);
    return parseToRespose(result);
  }
}
