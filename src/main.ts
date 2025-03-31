import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Fiverr')
    .setDescription('Fiverr project')
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('user')
    .addTag('Binh-luan')
    .addTag('CongViec')
    .addTag('LoaiCongViec')
    .addTag('ChiTietLoaiCongViec')
    .addTag('ThueCongViec')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'access-token',
    )
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
