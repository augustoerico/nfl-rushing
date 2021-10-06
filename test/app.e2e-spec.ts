import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should redirect "/" to "/players"', () => {
    // given
    const httpServer = app.getHttpServer()

    // when & then
    request.default(httpServer)
      .get('/')
      .expect(302);
  });

  it('should get "/players"', () => {
    // given
    const httpServer = app.getHttpServer()

    // when & then
    request.default(httpServer)
      .get('/players')
      .expect(200);
  });
});
