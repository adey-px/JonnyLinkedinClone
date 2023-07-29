import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
/**
 * Server config
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');

  await app.listen(5000);
}
bootstrap();
