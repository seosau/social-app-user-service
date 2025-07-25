import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: process.env.USER_GRPC_URL,
      package: process.env.USER_GRPC_PACKAGE_NAME || 'user',
      protoPath: join(__dirname, '../proto/user.proto')
    }
  });
  await app.listen();
}
bootstrap();
