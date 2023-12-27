import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  // app.enableVersioning({
  //   type: APP_HEADER
  // });
  await app.listen(3000);
}
bootstrap();
