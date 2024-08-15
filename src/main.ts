import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { Logger } from '@nestjs/common';
import config from './config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      /^http:\/\/localhost(:\d+)?$/
    ],
  });
  const docsConfig = new DocumentBuilder()
    .setTitle('Nest Stater API接口文档📄')
    .setDescription('Nest Stater API接口文档📄')
    .setVersion('v1.0')
    .build();
  const document = SwaggerModule.createDocument(app, docsConfig);
  SwaggerModule.setup('swagger', app, document, config.swaggerConfig);
  await app.listen(config.port);
}
bootstrap().then(() => {
  Logger.log(`Nest Service Started Successfully🎉🎉🎉\n[Nest] Server URL: \x1b[34mhttp://localhost:${config.port}\x1b[0m \x1b[32m\n[Nest] Swagger URL:\x1b[0m \x1b[35mhttp://localhost:${config.port}/swagger\x1b[0m`)
});
