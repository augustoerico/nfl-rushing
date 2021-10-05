import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [PlayersModule],
  controllers: [AppController],
})
export class AppModule {}
