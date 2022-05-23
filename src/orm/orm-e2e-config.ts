import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const ormE2eConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get('POSTGRES_E2E_HOST'),
    port: parseInt(configService.get('POSTGRES_E2E_PORT'), 10),
    username: configService.get('POSTGRES_E2E_USERNAME'),
    password: configService.get('POSTGRES_E2E_PASSWORD'),
    database: configService.get('POSTGRES_E2E_DATABASE'),
    entities: ['src/**/*.entity.ts'],
    synchronize: true,
    keepConnectionAlive: true
  }),
  inject: [ConfigService],
};