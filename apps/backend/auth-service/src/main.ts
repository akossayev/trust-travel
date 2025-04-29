import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppEnvironment } from './configs/app.config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
    const logger = new Logger('Bootstrap');

    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            logger: ['error', 'warn', 'log', 'debug'],
            transport: Transport.GRPC,
            options: {
                package: 'auth',
                protoPath: join(__dirname, '../proto/auth.proto'),
                url: '0.0.0.0:50052'
            },
        },
    );

    const configService = app.get(ConfigService);

    const environment = configService.get<AppEnvironment>('APP_ENV');
    logger.log(`Initializing App Environment: ${environment}`);


    await app.listen();
    logger.log(`gRPC Microservice is running on 0.0.0.0:50052`);
}

bootstrap();
